import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../services/prisma';

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!(email && password)) {
      return res.status(400).json({ msg: 'Usuario inválido' });
    }
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).send({ msg: 'invalid fields' });
    }

    if (user && bcrypt.compareSync(password, user.password)) {
      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user.id,
        },
        secret,
        {
          expiresIn: '1h',
        },
      );
      res
        .status(200)
        .json({ msg: 'Autenticação realizada com sucesso!', token });
    } else {
      return res.status(401).send({ msg: 'invalid fields' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'Acesso negado!' });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ msg: 'O Token é inválido!' });
  }
};
