import { Router } from 'express';
import { Context } from '../types/context';
import { authenticate } from '../utils/auth';

const router = Router();

router.get('/', authenticate, (req: Context, res) => {
  res.json(req.user);
  res.status(200);
});
router.get(':id', authenticate, (req: Context, res) => {
  res.json(req.user);
  res.status(200);
});
router.put('/:id', authenticate, (req: Context, res) => {
  res.json(req.user);
  res.status(200);
});
router.post('/', authenticate, (req: Context, res) => {
  res.json(req.user);
  res.status(200);
});
router.delete(':/id', authenticate, (req: Context, res) => {
  res.json(req.user);
  res.status(200);
});

export default router;
