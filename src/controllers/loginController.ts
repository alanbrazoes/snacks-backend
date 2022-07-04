import userService from '@services/user.services';
import Bcript from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import rescue from 'express-rescue';

import { Request, Response } from 'express';

const signin = rescue(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const passwordHash = Bcript.hashSync(password, parseInt(process.env.CHARACTERS_NUMBER as string));
  await userService.signin(email, passwordHash);
  res.status(201).json({ message: 'created user' });
});

const getUser = rescue(async (req: Request, res: Response) => {
  const { password, email } = req.body;

  const user = await userService.getUser(email);

  if (!user) res.status(404).json({ message: 'the username does not exist' });
  if (!Bcript.compareSync(password, user.password)) {
    res.status(400).json({ message: 'Filds is invalid' });
  }

  const { email: emailUser } = user;
  const token = jwt.sign({ emailUser }, process.env.JSON_TOKEN as string, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });

  res.status(200).json({ token });
});

export { getUser, signin };
