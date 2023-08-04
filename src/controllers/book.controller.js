import {
  createBook,
  getAllBooks,
  getOneBookById,
  updateBook,
  deleteBook,
} from '../repositorys/book.repository';
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
  try {
    const bookById = await updateBook(req.params.id, req.body);
    res.status(200).send(bookById);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const bookDelete = async (req, res) => {
  try {
    await deleteBook(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
