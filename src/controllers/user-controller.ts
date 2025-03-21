import { Request, Response } from 'express';
import { UserServices } from '../services/user-services';

export class UserController {
  static async post(req: Request, res: Response) {
    try {
      await new UserServices().post(req.body);
      res.status(201).json({ message: 'Usuário criado' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getByEmail(req: Request, res: Response) {
    try {
      const { email } = req.params;
      const user = await new UserServices().getByEmail(email);
      res.status(200).json({ message: 'Usuário retornado.', user });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error' });
      }
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const { page, limit } = req.query;
      console.log(page, limit);
      const users = await new UserServices().get(Number(page), Number(limit));
      res.status(200).json({ message: 'Usuários retornados.', users });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await new UserServices().delete(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedUser = await new UserServices().update(id, body);
      res
        .status(200)
        .json({ message: 'Usuário atualizado com sucesso', updatedUser });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
