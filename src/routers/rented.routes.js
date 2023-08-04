import { createRented } from '../repositorys/rented.repository';

const rentedRoutes = app => {
  app.post('/rented', createRented);
};

export default rentedRoutes;
