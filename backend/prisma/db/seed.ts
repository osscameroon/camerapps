import prisma from "./client";

const genreData: string[] = [
  'Mobile',
  'Desktop',
  'Web'
];

const seedGenre = async () => {
  const promises = genreData.map((genre) => prisma.genre.upsert({ where: { name: genre }, create: { name: genre }, update: { name: genre }}))

  return Promise.all(promises);
}

const seedDatabase = async () => {
  await seedGenre();
}