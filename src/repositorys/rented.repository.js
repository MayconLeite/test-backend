import { prisma } from '../services/prisma';

export const createRented = async data => {
  const rented = await prisma.rented.create({
    data,
  });
  return rented;
};
