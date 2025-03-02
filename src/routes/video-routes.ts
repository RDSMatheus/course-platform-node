import { Router } from 'express';
import upload from '../utils/multer';
import { VideoController } from '../controllers/video-controller';

export const videoRouter = Router();

videoRouter.post('/v1/video', upload.single('video'), VideoController.post);
videoRouter.get('/v1/video', VideoController.get);
videoRouter.get('/v1/video/:id', VideoController.getById);
videoRouter.delete('/v1/video/:id', VideoController.delete);
videoRouter.patch('/v1/video/:id', VideoController.update);
