import { Request, Response } from 'express';
import {
  ApplicationData,
  ApplicationListData,
  CreateApplicationInput,
  GenericResponse,
  PaginatedApplicationListData,
  UpdateApplicationInput,
} from '../types/request';
import { Category } from '../types/model';
import prisma, { Prisma } from '../core/db/client';
import { APPLICATION_ALREADY_EXIST, APPLICATION_DELETED, RESOURCE_NOT_FOUND } from '../utils/constants';
import { pictureUploadHandler } from '../utils/upload-handler';
import { UploadedFile } from '../types/common';
import { nullify, undef } from '../utils/helpers';
import { transformApplication, transformApplications } from '../utils/transformer';
import { PAGE_LIMIT } from '../core/config';

const findApplicationCategory = async (categoryId?: string, categoryName?: string): Promise<Category | null> => {
  if (categoryId) {
    return prisma.category.findFirst({ where: { id: categoryId } });
  }

  if (categoryName) {
    const category = await prisma.category.findFirst({ where: { name: categoryName } });

    if (category) {
      return category;
    }

    return prisma.category.create({ data: { name: categoryName } });
  }

  return null;
};

export const create = async (req: Request, res: Response): Promise<Response<ApplicationData | GenericResponse>> => {
  let result;

  try {
    result = await pictureUploadHandler(req, res);
  } catch (e: any) {
    console.log("error >>> ", e);
    return res.status(422).json({ errors: [e.message] });
  }

  const uploadedFile: UploadedFile = result.logo;
  const { categoryId, categoryName, ...applicationInput }: CreateApplicationInput = result.body;

  const application = await prisma.application.findFirst({
    where: {
      name: { equals: applicationInput.name },
    },
  });

  if (application) {
    return res.status(400).json({ message: APPLICATION_ALREADY_EXIST(applicationInput.name) });
  }

  if (!categoryName && !categoryId) {
    return res.status(422).json({ message: '' });
  }

  const applicationCategory = await findApplicationCategory(categoryId, categoryName);

  if (!applicationCategory) {
    return res.status(422).json({ message: RESOURCE_NOT_FOUND('Category', categoryId || '') });
  }

  const genre = await prisma.genre.findFirst({ where: { id: applicationInput.genreId } });

  if (!genre) {
    return res.status(422).json({ message: RESOURCE_NOT_FOUND('Genre', applicationInput.genreId) });
  }

  const input: Prisma.ApplicationUncheckedCreateInput = {
    appstoreUrl: nullify(applicationInput.appstoreUrl),
    categoryId: applicationCategory.id,
    description: nullify(applicationInput.description),
    dikaloUrl: nullify(applicationInput.dikaloUrl),
    facebookUrl: nullify(applicationInput.facebookUrl),
    genreId: applicationInput.genreId,
    githubUrl: nullify(applicationInput.githubUrl),
    linkedinUrl: nullify(applicationInput.linkedinUrl),
    logoUrl: uploadedFile.filename,
    name: applicationInput.name,
    othersUrl: nullify(applicationInput.othersUrl),
    playstoreUrl: nullify(applicationInput.playstoreUrl),
    slackUrl: nullify(applicationInput.slackUrl),
    tags: nullify(applicationInput.tags),
    telegramUrl: nullify(applicationInput.telegramUrl),
    twitterUrl: nullify(applicationInput.twitterUrl),
    websiteUrl: nullify(applicationInput.websiteUrl),
    whatsappUrl: nullify(applicationInput.whatsappUrl),
  };

  const createdApplication = await prisma.application.create({
    data: input,
    include: {
      category: { select: { id: true, name: true } },
      genre: { select: { id: true, name: true } },
    },
  });

  return res.json({ data: transformApplication(createdApplication) });
};

export const update = async (req: Request, res: Response): Promise<Response<ApplicationData | GenericResponse>> => {
  const { id } = req.params;

  console.log(req.body);

  const application = await prisma.application.findFirst({ where: { id } });

  if (!application) {
    return res.status(404).json({ message: RESOURCE_NOT_FOUND('Application', id) });
  }

  let result;

  try {
    result = await pictureUploadHandler(req, res);
  } catch (e: any) {
    return res.status(422).json({ errors: [e.message] });
  }

  const uploadedFile: UploadedFile = result.logo;
  const { categoryId, genreId, ...applicationInput }: UpdateApplicationInput = result.body;

  if (applicationInput.name) {
    const application = await prisma.application.findFirst({
      where: {
        id: { not: { equals: id } },
        name: { equals: applicationInput.name },
      },
    });

    if (application) {
      return res.status(400).json({ message: APPLICATION_ALREADY_EXIST(applicationInput.name) });
    }
  }

  if (categoryId) {
    const category = await prisma.category.findFirst({ where: { id: categoryId } });

    if (!category) {
      return res.status(422).json({ message: RESOURCE_NOT_FOUND('Category', categoryId) });
    }
  }

  if (genreId) {
    const genre = await prisma.genre.findFirst({ where: { id: genreId } });

    if (!genre) {
      return res.status(422).json({ message: RESOURCE_NOT_FOUND('Genre', genreId) });
    }
  }

  const updateInput: Prisma.ApplicationUncheckedUpdateInput = {
    appstoreUrl: undef(applicationInput.appstoreUrl),
    categoryId,
    description: undef(applicationInput.description),
    dikaloUrl: undef(applicationInput.dikaloUrl),
    facebookUrl: undef(applicationInput.facebookUrl),
    genreId,
    githubUrl: undef(applicationInput.githubUrl),
    linkedinUrl: undef(applicationInput.linkedinUrl),
    logoUrl: uploadedFile?.filename,
    name: applicationInput.name,
    othersUrl: undef(applicationInput.othersUrl),
    playstoreUrl: undef(applicationInput.playstoreUrl),
    slackUrl: undef(applicationInput.slackUrl),
    tags: undef(applicationInput.tags),
    telegramUrl: undef(applicationInput.telegramUrl),
    twitterUrl: undef(applicationInput.twitterUrl),
    websiteUrl: undef(applicationInput.websiteUrl),
    whatsappUrl: undef(applicationInput.whatsappUrl),
  };

  console.log(updateInput);

  const updatedApplication = await prisma.application.update({
    data: updateInput,
    include: {
      category: { select: { id: true, name: true } },
      genre: { select: { id: true, name: true } },
    },
    where: { id },
  });

  return res.json({ data: transformApplication(updatedApplication) });
};

export const remove = async (req: Request, res: Response): Promise<Response<GenericResponse>> => {
  const { id } = req.params;

  const application = await prisma.application.findFirst({ where: { id } });

  if (!application) {
    return res.status(404).json({ message: RESOURCE_NOT_FOUND('Application', id) });
  }

  await prisma.application.delete({ where: { id } });

  return res.json({ message: APPLICATION_DELETED });
};

export const retrieveById = async (
  req: Request,
  res: Response,
): Promise<Response<ApplicationData | GenericResponse>> => {
  const { id } = req.params;

  const application = await prisma.application.findFirst({
    include: {
      category: { select: { id: true, name: true } },
      genre: { select: { id: true, name: true } },
    },
    where: { id },
  });

  if (!application) {
    return res.status(404).json({ message: RESOURCE_NOT_FOUND('Application', id) });
  }

  return res.json({ data: transformApplication(application) });
};

export const retrieveAll = async (req: Request, res: Response): Promise<Response<PaginatedApplicationListData>> => {
  const cursor = req.query.nextToken as string;

  const limit = Math.min(30, PAGE_LIMIT);

  // If the limit is 10, we fetch 11 which help to know if there still more data in the table
  const limitPlusOne = limit + 1;

  const list = await prisma.application.findMany({
    include: {
      category: { select: { id: true, name: true } },
      genre: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: 'desc' },
    take: limitPlusOne,
    where: cursor ? { createdAt: { lte: new Date(parseInt(cursor, 10)) } } : {},
  });

  const nextCursor = list.length === limitPlusOne ? list[list.length - 1].createdAt.getTime() : null;

  return res.json({
    data: {
      items: transformApplications(list.slice(0, limit)),
      nextToken: nextCursor,
    },
  });
};
