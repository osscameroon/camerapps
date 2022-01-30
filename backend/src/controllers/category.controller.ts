import { Request, Response } from 'express';
import {
  CategoryData,
  CategoryListData,
  CreateCategoryInput,
  GenericResponse,
  UpdateCategoryInput,
} from '../types/request';
import prisma from '../../prisma/db/client';
import { CATEGORY_ALREADY_EXIST, CATEGORY_DELETED, RESOURCE_NOT_FOUND } from '../utils/constants';
import { capitalize } from '../utils/helpers';

export const create = async (req: Request, res: Response): Promise<Response<CategoryData | GenericResponse>> => {
  const { name }: CreateCategoryInput = req.body;

  const category = await prisma.category.findFirst({ where: { name: { equals: name, mode: 'insensitive' } } });

  if (category) {
    return res.json({ data: category });
  }

  const createdCategory = await prisma.category.create({ data: { name: capitalize(name) } });

  return res.json({ data: createdCategory });
};

export const update = async (req: Request, res: Response): Promise<Response<CategoryData | GenericResponse>> => {
  const { id } = req.params;
  const { name }: UpdateCategoryInput = req.body;

  const category = await prisma.category.findFirst({
    where: {
      id: { not: { equals: id } },
      name: { equals: name, mode: 'insensitive' },
    },
  });

  if (category) {
    return res.status(400).json({ message: CATEGORY_ALREADY_EXIST(name) });
  }

  const updatedCategory = await prisma.category.update({ data: { name: capitalize(name) }, where: { id } });

  return res.json({ data: updatedCategory });
};

export const remove = async (req: Request, res: Response): Promise<Response<GenericResponse>> => {
  const { id } = req.params;

  await prisma.category.delete({ where: { id } });

  return res.json({ message: CATEGORY_DELETED });
};

export const retrieveById = async (req: Request, res: Response): Promise<Response<CategoryData | GenericResponse>> => {
  const { id } = req.params;

  const category = await prisma.category.findFirst({ where: { id } });

  if (!category) {
    return res.status(404).json({ message: RESOURCE_NOT_FOUND('Category', id) });
  }

  return res.json({ data: category });
};

export const retrieveAll = async (req: Request, res: Response): Promise<Response<CategoryListData>> => {
  const categories = await prisma.category.findMany();

  return res.json({ data: categories });
};
