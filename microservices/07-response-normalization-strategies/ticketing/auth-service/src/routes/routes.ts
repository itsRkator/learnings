import { Router } from 'express';
import authRoutes from './auth/auth.ts';
import userRoutes from './users/users.ts';

const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
