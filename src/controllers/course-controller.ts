import { Request, Response } from 'express';
import { CourseServices } from '../services/course-services';

export class CourseController {
  static async post(req: Request, res: Response) {
    try {
      await new CourseServices().post(req.body);
      res.status(201).json({ message: 'Curso criado com sucesso.' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const courses = await new CourseServices().get();
      res
        .status(200)
        .json({ message: 'Cursos retornados com sucesso', courses });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const course = await new CourseServices().getById(id);
      res.status(200).json({ message: 'Curso encontrado.', course });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await new CourseServices().delete(id);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedCourse = await new CourseServices().update(id, body);
      res
        .status(200)
        .json({ message: 'Curso atualizado com sucesso.', updatedCourse });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
