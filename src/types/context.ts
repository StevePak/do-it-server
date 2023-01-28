import { Request } from 'express';
import { User } from './user';

export type UserContext = Pick<User, 'id' | 'username'>;

export interface Context extends Request {
  user?: UserContext;
}
