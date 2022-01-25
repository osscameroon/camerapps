import prisma from './client';

const genreData = ['Mobile', 'Desktop', 'Web'];

const seedGenre = async () => {
  const promises = genreData.map((genre) =>
    prisma.genre.upsert({ create: { name: genre }, update: { name: genre }, where: { name: genre } }),
  );

  return Promise.all(promises);
};

const seedDatabase = async () => {
  await seedGenre();
};

export { seedDatabase };
