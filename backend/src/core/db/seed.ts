import prisma from './client';
import { seedApplication } from './application';

const genreData = ['Desktop', 'Framework', 'Library', 'Mobile', 'Multiplatform', 'Video Game', 'Web Application'];
const categoryData = [
  'Agriculture',
  'Art',
  'Cinema',
  'E-commerce',
  'Education',
  'Finance',
  'Health',
  'Music',
  'Other',
  'Social',
  'Tourism',
  'Tech',
];

const seedGenre = async () => {
  const promises = genreData.map((genre) =>
    prisma.genre.upsert({ create: { name: genre }, update: { name: genre }, where: { name: genre } }),
  );

  return Promise.all(promises);
};

const seedCategory = async () => {
  const promises = categoryData.map((category) =>
    prisma.category.upsert({ create: { name: category }, update: { name: category }, where: { name: category } }),
  );

  return Promise.all(promises);
};

const seedDatabase = async () => {
  await seedGenre();
  await seedCategory();
  await seedApplication();
};

export { seedDatabase };
