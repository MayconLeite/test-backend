import { prisma } from '../services/prisma';

export const createBook = async data => {
  const book = await prisma.book.create({
    data,
  });
  return book;
};

export const getAllBooks = async () => {
  const books = prisma.book.findMany({});
  return books;
};

export const getOneBookById = async id => {
  const book = prisma.book.findUnique({ where: { id } });
  return book;
};

export const updateBook = async (id, data) => {
  const book = prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return book;
};

export const deleteBook = async id => {
  await prisma.book.delete({ where: { id } });
};
