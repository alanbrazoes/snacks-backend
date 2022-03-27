import LoginModel from '@models/loginModel';
import Bcript from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { Request, Response } from 'express';

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const passwordHash = Bcript.hashSync(
      password,
      parseInt(process.env.CHARACTERS_NUMBER as string)
    );
    await LoginModel.create({ email, password: passwordHash });
    return res.status(200).json({ status: '200' });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const {
      data: { password, email },
    } = req.body;
    const user = await LoginModel.findOne({ email });

    if (!user) return res.status(404).send({ message: 'The username does not exist' });
    if (!Bcript.compareSync(password, user.password)) {
      return res.status(400).send({ message: 'The password is invalid' });
    }

    const { email: emailUser } = user;
    const token = jwt.sign({ emailUser }, process.env.JSON_TOKEN as string, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).send('user not found');
  }
};
