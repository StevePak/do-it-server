import { Request } from 'express';
import { User } from './user';

export interface Context extends Request {
  user?: User;
}
