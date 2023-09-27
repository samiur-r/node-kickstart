import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

const connectDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    throw new Error(`Error connecting to the database: ${error}`);
  }
};

export { prisma, connectDatabase };
