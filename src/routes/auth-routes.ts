import { Router } from 'express';
import { AuthServices } from '../services/auth-services';

export const authRouter = Router();

authRouter.post('/v1/auth/login', AuthServices.post);
