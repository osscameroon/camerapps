import axios from 'axios';
import path from 'path';
import fs from 'fs';
import jsYaml from 'js-yaml';
import prisma, { Prisma } from './client';
import { nullify } from '../../utils/helpers';

const FILE_URL = 'https://raw.githubusercontent.com/osscameroon/camerapps.com/main/src/res/apps.yaml';

type App = {
  appstore: string | null;
  category: string;
  description: string | null;
  dikalo: string | null;
  facebook: string | null;
  github_account: string | null;
  image: string | null;
  otherlinks?: string[];
  playstore: string | null;
  slack: string | null;
  tags: string[];
  telegram: string | null;
  title: string;
  twitter: string | null;
  website: string | null;
  whatsapp: string | null;
};

type AppList = {
  items: App[];
};

const downloadImage = async (fileName: string) => {
  if (fileName.startsWith('https://')) {
    return;
  }

  const url = `https://raw.githubusercontent.com/osscameroon/camerapps.com/main/src/res/imgs/${fileName}`;
  const filePath = path.resolve(__dirname, '../../../public/images', fileName);

  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    method: 'GET',
    responseType: 'stream',
    url,
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

const createApplication = async (appItem: AppList['items'][number]) => {
  const genre = await prisma.genre.findFirst({ select: { id: true }, where: { name: 'Multiplatform' } });

  if (!genre) {
    return;
  }

  const category = await prisma.category.findFirst({ where: { name: 'Other' } });

  if (!category) {
    return;
  }

  const input: Prisma.ApplicationUncheckedCreateInput = {
    appstoreUrl: nullify(appItem.appstore),
    categoryId: category.id,
    description: nullify(appItem.description),
    dikaloUrl: nullify(appItem.dikalo),
    facebookUrl: nullify(appItem.facebook),
    genreId: genre.id,
    githubUrl: nullify(appItem.github_account),
    linkedinUrl: null,
    logoUrl: appItem.image,
    name: appItem.title,
    othersUrl: nullify(appItem.otherlinks ? appItem.otherlinks.join(',') : null),
    playstoreUrl: nullify(appItem.playstore),
    slackUrl: nullify(appItem.slack),
    tags: nullify(appItem.tags.map((tag) => tag.toLowerCase()).join(',')),
    telegramUrl: nullify(appItem.telegram),
    twitterUrl: nullify(appItem.twitter),
    websiteUrl: nullify(appItem.website),
    whatsappUrl: nullify(appItem.whatsapp),
  };

  const application = await prisma.application.findFirst({ where: { name: appItem.title } });

  if (application) {
    return;
  }

  await prisma.application.create({ data: input });

  await downloadImage(appItem.image || 'default.svg');
};

const seedApplication = async () => {
  const response = await axios.get<string>(FILE_URL).catch((error) => {
    console.error(error);

    return { data: null };
  });

  if (!response.data) {
    return;
  }

  try {
    const appList = jsYaml.load(response.data) as unknown as AppList;

    await Promise.all(appList.items.map(createApplication));
  } catch (e) {
    console.error(e);
  }
};

export { seedApplication };
