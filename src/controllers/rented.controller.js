import { createRented } from '../repositorys/rented.repository';

export const createBooking = async (req, res) => {
  try {
    const rented = await createRented(req.body);
    res.status(200).send(rented);
  } catch (error) {
    res.status(400).send(error);
  }
};
