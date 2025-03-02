import { Request, Response } from 'express';
import { ModuleServices } from '../services/module-services';

export class ModuleController {
  static async post(req: Request, res: Response) {
    try {
      await new ModuleServices().post(req.body);
      res.status(201).json({ message: 'Módulo criado com sucesso.' });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const module = await new ModuleServices().getById(id);
      res
        .status(200)
        .json({ message: 'Módulo encontrado com sucesso', module });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const modules = await new ModuleServices().get();
      res.status(200).json({ message: 'Módulos retornados', modules });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await new ModuleServices().delete(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedModule = await new ModuleServices().update(id, body);
      res.status(200).json({
        message: 'Módulo atualizado com sucesso.',
        module: updatedModule,
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
