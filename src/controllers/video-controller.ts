import { Request, Response } from 'express';
import { VideoServices } from '../services/video-services';

export class VideoController {
  static async post(req: Request, res: Response) {
    try {
      await new VideoServices().post(req);
      res.status(201).json({ message: 'Video postado com sucesso.' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
      console.log(error);
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const { page, limit } = req.query;
      const video = await new VideoServices().get(Number(page), Number(limit));
      res
        .status(200)
        .json({ message: 'Video encontrados com sucesso.', video });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const video = await new VideoServices().getById(id);
      res.status(200).json({ message: 'Video encontrado.', video });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await new VideoServices().delete(id);
      res.status(204).json();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const video = await new VideoServices().update(id, body);
      res.status(200).json({ message: 'Video atualizado com sucesso', video });
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
