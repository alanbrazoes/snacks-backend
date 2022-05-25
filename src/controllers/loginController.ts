import { LoginModel } from '@models/user.model';
import Bcript from 'bcrypt';
import * as jwt from 'jsonwebtoken';

import { Request, Response } from 'express';

const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const passwordHash = Bcript.hashSync(
      password,
      parseInt(process.env.CHARACTERS_NUMBER as string)
    );
    await LoginModel.create({ email, password: passwordHash });
    return res.status(201).json({ message: 'created user' });
  } catch (error) {
    return res.status(500).json({ erro: error });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const user = await LoginModel.findOne({ email });

    if (!user) return res.status(404).json({ message: 'the username does not exist' });
    if (!Bcript.compareSync(password, user.password)) {
      return res.status(400).json({ message: 'The password is invalid' });
    }

    const { email: emailUser } = user;
    const token = jwt.sign({ emailUser }, process.env.JSON_TOKEN as string, {
      expiresIn: process.env.TOKEN_EXPIRE,
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'internal error' });
  }
};

export { getUser, signin };
