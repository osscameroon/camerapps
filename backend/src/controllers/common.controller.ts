import { Request, Response } from 'express';
import { SummaryData } from '../types/request';
import prisma from '../core/db/client';

export const getSummary = async (req: Request, res: Response): Promise<Response<SummaryData>> => {
  const genreCount = await prisma.genre.count();
  const categoryCount = await prisma.category.count();
  const applicationCount = await prisma.application.count();

  return res.json({
    data: {
      application: applicationCount,
      category: categoryCount,
      genre: genreCount,
    },
  });
};
