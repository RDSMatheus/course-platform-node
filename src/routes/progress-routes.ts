import { Router } from 'express';
import { ProgressController } from '../controllers/progress-controller';

export const progressRouter = Router();

progressRouter.post(
  '/v1/complete-video',
  /* 
    #swagger.tags = ["Progress"]
    #swagger.description = 'Atualiza os vídeos vistos em determinado curso.'
    #swagger.parameters["ProgressData"] = {
      in: "body",
      description: "Dados do vídeo completado.",
      required: true,
      schema: {
        $ref : "#/definitions/VideoProgressPost"
      }
    }
    #swagger.responses[200] = {
      description: "Vídeo concluído com sucesso.",
      schema: {
        message: "Vídeo concluído com sucesso.",
        progress: { $ref : "#/definitions/VideoProgressResponse"}
      }
    }
  */
  ProgressController.completeVideo,
);

progressRouter.post(
  '/v1/complete-module',
  /* 
    #swagger.tags = ["Progress"]
    #swagger.description = 'Atualiza os módulos concluídos em determinado curso.'
    #swagger.parameters["ProgressData"] = {
      in: "body",
      description: "Dados do módulo completado.",
      required: true,
      schema: {
        $ref : "#/definitions/ModuleProgressPost"
      }
    }
    #swagger.responses[200] = {
      description: "Módulo concluído com sucesso.",
      schema: {
        message: "Módulo concluído com sucesso.",
        progress: { $ref : "#/definitions/VideoProgressResponse"}
      }
    }
  */
  ProgressController.completeModule,
);

progressRouter.get(
  '/v1/progress/:userId/:courseId',
  /* 
    #swagger.tags = ["Progress"]
    #swagger.description = 'Obtém o progresso do usuário em um curso específico.'
    #swagger.parameters['userId'] = {
      in: 'path',
      description: 'ID do usuário.',
      required: true,
      type: 'string'
    }
    #swagger.parameters['courseId'] = {
      in: 'path',
      description: 'ID do curso.',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Progresso retornado com sucesso.',
      schema: { 
        message: "Progresso retornado.",
        progress: {$ref: "#/definitions/ProgressGet"} 
        }
    }
    #swagger.responses[404] = {
      description: 'Progresso não encontrado.',
      schema: { message: "Progresso não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ProgressController.getProgress,
);

progressRouter.get(
  '/v1/course-progress/:userId/:courseId',
  /* 
    #swagger.tags = ["Progress"]
    #swagger.description = 'Obtém o progresso do curso para um usuário específico.'
    #swagger.parameters['userId'] = {
      in: 'path',
      description: 'ID do usuário.',
      required: true,
      type: 'string'
    }
    #swagger.parameters['courseId'] = {
      in: 'path',
      description: 'ID do curso.',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Progresso do curso retornado com sucesso.',
      schema: {
        message: "Progresso retornado.",
        progress: "string"
      }
    }
    #swagger.responses[404] = {
      description: 'Progresso do curso não encontrado.',
      schema: { message: "Progresso do curso não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ProgressController.getCourseProgress,
);
