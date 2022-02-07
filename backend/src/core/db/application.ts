import axios from 'axios';
import path from 'path';
import fs from 'fs';
import jsYaml from 'js-yaml';

const FILE_URL = 'https://raw.githubusercontent.com/osscameroon/camerapps.com/main/src/res/apps.yaml';

type App = {
  appstore: string | null;
  category: string;
  description: string | null;
  dikalo: string | null;
  facebook: string | null;
  github_account: string | null;
  image: string | null;
  otherlinks: string[];
  playstore: string | null;
  slack: string | null;
  tags: string[];
  telegram: string | null;
  title: string;
  twitter: string | null;
  website: string | null;
  whatsapp: string | null;
};

const seedApplication = async () => {
  // download file from github and save to the folder
  const response = await axios.get<string>(FILE_URL).catch((error) => {
    console.error(error);

    return { data: null };
  });

  if (!response.data) {
    return;
  }

  const fileName = path.resolve(__dirname, '../../../public/apps.yaml');

  console.log(fileName);

  try {
    const doc = jsYaml.load(response.data);

    console.log(doc);
  } catch (e) {
    console.log(e);
  }

  // Read the file parse it to json
};

seedApplication().then();

export { seedApplication };
