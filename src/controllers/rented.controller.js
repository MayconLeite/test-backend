import {
  createRented,
  devolutionRented,
} from '../repositorys/rented.repository';
import { prisma } from '../services/prisma';

export const rentedCreate = async (req, res) => {
  const { bookId, userId } = req.body;

  const [bookExists] = await prisma.book.findMany({
    where: {
      id: bookId,
    },
  });

  const [userExists] = await prisma.user.findMany({
    where: {
      id: userId,
    },
  });

  if (!bookExists || !userExists) {
    return res.status(400).json({ error: 'Usuário ou Livro não encontrado.' });
  }

  const [statusBook] = await prisma.book.findMany({
    where: {
      bookingStatus: bookExists.bookingStatus,
    },
  });

  if (statusBook.bookingStatus === true) {
    return res.status(400).json({ error: 'Livro já está alugado' });
  }

  try {
    await prisma.book.update({
      where: {
        id: bookId,
      },
      data: {
        bookingStatus: true,
      },
    });
    const rented = await createRented(req.body);
    return res.status(200).send(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const devolution = async (req, res) => {
  try {
    const bookDevolution = await devolutionRented(
      req.params.id,
      req.body.bookingStatus,
    );
    res.status(200).send(bookDevolution);
  } catch (error) {
    res.status(400).send(error);
  }
};
