import { Router } from 'express';
import { CourseController } from '../controllers/course-controller';

export const courseRouter = Router();

courseRouter.post('/v1/course', CourseController.post);
courseRouter.get('/v1/course', CourseController.get);
courseRouter.get('/v1/course/:id', CourseController.getById);
courseRouter.put('/v1/course/:id', CourseController.update);
courseRouter.delete('/v1/course/:id', CourseController.delete);
