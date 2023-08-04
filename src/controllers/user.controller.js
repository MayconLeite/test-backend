import bcrypt from 'bcrypt';
import { userValidation } from '../validations/user.validation';
import { createUser } from '../repositorys/user.repository';

export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body);

    const hashPassword = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashPassword;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
