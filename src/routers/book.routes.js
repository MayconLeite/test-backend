import { checkToken } from '../controllers/auth.controller';
import {
  create,
  getBookById,
  getBooks,
  update,
  bookDelete,
} from '../controllers/book.controller';

const bookRoutes = app => {
  app.post('/book', checkToken, create);
  app.get('/book', checkToken, getBooks);
  app.get('/book/:id', checkToken, getBookById);
  app.put('/book/:id', checkToken, update);
  app.delete('/book/:id', checkToken, bookDelete);
};

export default bookRoutes;
