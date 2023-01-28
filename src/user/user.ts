import { Response } from 'express';
import { Context } from '../types/context';
import { User } from '../types/user';
import { comparePassword, createJwt, hashPassword } from '../utils/auth';
import prisma from '../utils/db';

export const createNewUser = async (req: Context, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      password: await hashPassword(password),
    },
  });

  const tokenBody: User = { id: user.id, username: user.username };

  const token = createJwt(tokenBody);

  res.json({ accessToken: token });
  res.status(200);
};

export const login = async (req: Context, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user) {
    return res.sendStatus(401);
  }

  const passwordMatches = await comparePassword(password, user.password);

  if (!passwordMatches) {
    return res.sendStatus(401);
  }

  res.json({ accessToken: createJwt(user) });
  res.status(200);
};
