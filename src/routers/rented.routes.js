import { devolution, rentedCreate } from '../controllers/rented.controller';

const rentedRoutes = app => {
  app.post('/rented', rentedCreate);
  app.put('/devolution/:id', devolution);
};

export default rentedRoutes;
