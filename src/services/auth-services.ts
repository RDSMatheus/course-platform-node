import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/user-model';

export class AuthServices {
  static async post(req: Request, res: Response) {
    const secretKey = String(process.env.SECRET_KEY);
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'Username e senha são obrigatórios.' });
      return;
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        res
          .status(404)
          .json({ message: 'Email inválido, usuário não encontrado.' });
        return;
      }
      const isPasswordValid = bcrypt.compare(password, user?.password);

      if (!isPasswordValid) {
        res.status(401).json({ message: 'Senha invalida.' });
        return;
      }

      const token = jwt.sign({ id: user.id, username: user.name }, secretKey, {
        expiresIn: '1h',
      });
      res.status(200).json({ message: 'Login gerado com sucesso', token });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: 'Erro interno do servidor.', error: error.message });
    }
  }
}
