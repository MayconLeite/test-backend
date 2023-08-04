import { login } from '../controllers/auth.controller';

const authRoutes = app => {
  app.post('/auth/login', login);
};

export default authRoutes;
