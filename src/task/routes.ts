import { Router } from 'express';
import taskService from './task';

const router = Router();

router.get('/', () => {});
router.get(':id', () => {});
router.put('/:id', () => {});
router.post('/', () => {});
router.delete(':/id', () => {});

export default router;
