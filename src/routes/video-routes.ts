import { Router } from 'express';
import upload from '../utils/multer';
import { VideoController } from '../controllers/video-controller';

export const videoRouter = Router();

videoRouter.post(
  '/v1/video',
  /*
  #swagger.tags = ["Videos"]
    #swagger.description = "Posta um novo video."
  #swagger.consumes = ["multipart/form-data"]
  */
  /*
  #swagger.parameters['title'] = {
      in: 'formData',
      description: 'Título do vídeo',
      required: true,
      type: 'string'
    }
    #swagger.parameters['description'] = {
      in: 'formData',
      description: 'Descrição do vídeo',
      required: true,
      type: 'string'
    }
    #swagger.parameters['video'] = {
      in: 'formData',
      description: 'Arquivo de vídeo',
      required: true,
      type: 'file'
    }
  }
    #swagger.responses[201] = {
    description: "Video postado com sucesso.",
    schema: {
    message: "Video postado com sucesso."
    }
    }
    #swagger.responses[400] = {
    description: "Preencha todos os campos.",
    schema: {
      message: "Preencha os dados corretamente."
    }
    }
  */
  upload.single('video'),
  VideoController.post,
);
videoRouter.get('/v1/video', VideoController.get);
videoRouter.get(
  '/v1/video/:id',
  /*
  #swagger.tags= ["Videos"]
  #swagger.description = "Retorna um video pelo id."
  #swagger.parametes["id"] = {
    in: "params",
    description: "Id do video.",
    required: true,
    type: string
 }
  #swagger.responses[200] = {
    description: "Video retornado com sucesso.",
    schema: {
      message: "Video encontrado.",
      video: {
      $ref: "#/definitions/VideoGet"
      }
    }
  }
 */ VideoController.getById,
);
videoRouter.delete('/v1/video/:id', VideoController.delete);
videoRouter.patch('/v1/video/:id', VideoController.update);
