import { prisma } from '../services/prisma';

export const createRented = async data => {
  const rented = await prisma.rented.create({
    data,
  });
  return rented;
};

export const devolutionRented = async (id, bookingStatus) => {
  const rented = await prisma.book.update({
    where: {
      id,
    },
    data: {
      bookingStatus,
    },
  });
  return rented;
};
