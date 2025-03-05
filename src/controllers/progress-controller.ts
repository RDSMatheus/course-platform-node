import { Request, Response } from 'express';
import { ProgressServices } from './../services/progress-services';

export class ProgressController {
  static async completeVideo(req: Request, res: Response) {
    try {
      const { body } = req;
      const progress = await new ProgressServices().completeVideo(body);
      res
        .status(200)
        .json({ message: 'Video concluído com sucesso', progress });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    }
  }

  static async completeModule(req: Request, res: Response) {
    try {
      const { body } = req;
      const progress = await new ProgressServices().completeModule(body);
      res
        .status(200)
        .json({ message: 'Modulo concluído com sucesso', progress });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error.' });
      }
    }
  }

  static async getProgress(req: Request, res: Response) {
    try {
      const { userId, courseId } = req.params;
      const progress = await new ProgressServices().getProgress(
        courseId,
        userId,
      );
      res.status(200).json({ message: 'Progresso retornado', progress });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error.' });
      }
    }
  }

  static async getCourseProgress(req: Request, res: Response) {
    try {
      const { courseId, userId } = req.params;
      const progress = await new ProgressServices().getCourseProgress(
        courseId,
        userId,
      );
      res.status(200).json({ message: 'Progresso retornado', progress });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error' });
      }
    }
  }
  static async deleteProgress(req: Request, res: Response) {
    try {
      const { userId, courseId } = req.params;
      await new ProgressServices().deleteProgress(userId, courseId);
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error.' });
      }
    }
  }
}
