import {
  createBook,
  getAllBooks,
  getOneBookById,
  updateBook,
  deleteBook,
} from '../repositorys/book.repository';
import { prisma } from '../services/prisma';
import { bookValidation } from '../validations/book.validation';

export const create = async (req, res) => {
  try {
    await bookValidation.validate(req.body);

    const book = await createBook(req.body);
    res.status(200).send(book);
  } catch (error) {
    res.satus(400).send(error);
  }
};

export const getBooks = async (req, res) => {
  try {
    const users = await getAllBooks();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getBookById = async (req, res) => {
  try {
    const bookById = await getOneBookById(req.params.id);
    res.status(200).send(bookById);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  const [bookExists] = await prisma.book.findMany({
    where: {
      id: req.params.id,
    },
  });

  if (bookExists.bookingStatus === true) {
    return res
      .status(400)
      .json({ error: 'Livro está alugado, não é possível editar' });
  }

  try {
    const bookById = await updateBook(req.params.id, req.body);
    res.status(200).send(bookById);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const bookDelete = async (req, res) => {
  const [bookExists] = await prisma.book.findMany({
    where: {
      id: req.params.id,
    },
  });

  if (bookExists.bookingStatus === true) {
    return res
      .status(400)
      .json({ error: 'Livro está alugado, não é possível deletar' });
  }
  try {
    await deleteBook(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
