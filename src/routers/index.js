import bookRoutes from './book.routes';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import rentedRoutes from './rented.routes';

const router = app => {
  bookRoutes(app);
  userRoutes(app);
  authRoutes(app);
  rentedRoutes(app);
};

export default router;
