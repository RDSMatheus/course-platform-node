import express, { json } from 'express';
import { userRouter } from './user-routes';
import { videoRouter } from './video-routes';
import { moduleRouter } from './module-routes';
import { courseRouter } from './course-routes';
import { authRouter } from './auth-routes';

export const routes = (app: express.Express) => {
  app.use(json());
  app.use(userRouter);
  app.use(videoRouter);
  app.use(moduleRouter);
  app.use(courseRouter);
  app.use(authRouter);
};
