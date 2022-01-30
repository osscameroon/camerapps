import { Request, Response } from 'express';
import { GenreData, GenreListData, CreateGenreInput, GenericResponse, UpdateGenreInput } from '../types/request';
import prisma from '../../prisma/db/client';
import { GENRE_ALREADY_EXIST, GENRE_DELETED, RESOURCE_NOT_FOUND } from '../utils/constants';
import { capitalize } from '../utils/helpers';

export const create = async (req: Request, res: Response): Promise<Response<GenreData | GenericResponse>> => {
  const { name }: CreateGenreInput = req.body;

  const genre = await prisma.genre.findFirst({ where: { name: { equals: name, mode: 'insensitive' } } });

  if (genre) {
    return res.json({ data: genre });
  }

  const createdGenre = await prisma.genre.create({ data: { name: capitalize(name) } });

  return res.json({ data: createdGenre });
};

export const update = async (req: Request, res: Response): Promise<Response<GenreData | GenericResponse>> => {
  const { id } = req.params;
  const { name }: UpdateGenreInput = req.body;

  const genre = await prisma.genre.findFirst({
    where: {
      id: { not: { equals: id } },
      name: { equals: name, mode: 'insensitive' },
    },
  });

  if (genre) {
    return res.status(400).json({ message: GENRE_ALREADY_EXIST(name) });
  }

  const updatedGenre = await prisma.genre.update({ data: { name: capitalize(name) }, where: { id } });

  return res.json({ data: updatedGenre });
};

export const remove = async (req: Request, res: Response): Promise<Response<GenericResponse>> => {
  const { id } = req.params;

  await prisma.genre.delete({ where: { id } });

  return res.json({ message: GENRE_DELETED });
};

export const retrieveById = async (req: Request, res: Response): Promise<Response<GenreData | GenericResponse>> => {
  const { id } = req.params;

  const genre = await prisma.genre.findFirst({ where: { id } });

  if (!genre) {
    return res.status(404).json({ message: RESOURCE_NOT_FOUND('Genre', id) });
  }

  return res.json({ data: genre });
};

export const retrieveAll = async (req: Request, res: Response): Promise<Response<GenreListData>> => {
  const genres = await prisma.genre.findMany();

  return res.json({ data: genres });
};
