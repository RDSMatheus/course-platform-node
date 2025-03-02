import { Router } from 'express';
import { ModuleController } from '../controllers/module-controller';

export const moduleRouter = Router();

moduleRouter.post('/v1/modules', ModuleController.post);
moduleRouter.get('/v1/modules/:id', ModuleController.getById);
moduleRouter.get('/v1/modules', ModuleController.get);
moduleRouter.delete('/v1/modules/:id', ModuleController.delete);
moduleRouter.patch('/v1/modules/:id', ModuleController.update);
