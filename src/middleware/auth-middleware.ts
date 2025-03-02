import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers['authorization']?.split(' ')[1];
  const secretKey = process.env.SECRET_KEY;
  if (!token) {
    res.status(401).json({ message: 'Forneça um token.' });
  }

  try {
    if (token && secretKey) {
      jwt.verify(token, secretKey);
      next();
    }
  } catch (error) {
    res.status(403).json({ message: 'Token inválido ou expirado!' });
  }
};
