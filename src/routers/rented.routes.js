import { checkToken } from '../controllers/auth.controller';
import { devolution, rentedCreate } from '../controllers/rented.controller';

const rentedRoutes = app => {
  app.post('/rented', checkToken, rentedCreate);
  app.put('/devolution/:id', checkToken, devolution);
};

export default rentedRoutes;
