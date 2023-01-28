import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserContext, Context } from '../types/context';
import bcrypt from 'bcrypt';

export const createJwt = (user: UserContext) => {
  return jwt.sign(user, process.env.JWT_SECRET || '', {
    expiresIn: '10m',
  });
};

export const authenticate = (req: Context, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.json({ message: 'Unauthorized' });
    res.status(401);
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET ?? '');
    req.user = user as UserContext;
  } catch (e) {
    res.json({ message: 'Forbidden' });
    res.status(401);
    return;
  }
  next();
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};
