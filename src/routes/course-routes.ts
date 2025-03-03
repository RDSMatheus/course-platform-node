import { Router } from 'express';
import { CourseController } from '../controllers/course-controller';

export const courseRouter = Router();

courseRouter.post(
  '/v1/course',
  /* 
    #swagger.tags = ["Courses"]
    #swagger.description = "Cria um novo curso."
    #swagger.parameters['CourseData'] = {
      in: 'body',
      description: 'Dados do curso.',
      required: true,
      schema: { $ref: "#/definitions/CoursePost" }
    }
    #swagger.responses[201] = {
      description: 'Curso criado com sucesso.',
      schema: { message: "Curso criado com sucesso.", course: { $ref: "#/definitions/CourseGet" } }
    }
    #swagger.responses[400] = {
      description: 'Erro de validação dos dados.',
      schema: { message: "Preencha os dados corretamente." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  CourseController.post,
);

courseRouter.get(
  '/v1/course',
  /* 
    #swagger.tags = ["Courses"]
    #swagger.description = "Obtém todos os cursos com paginação."
    #swagger.parameters['page'] = {
      in: 'query',
      description: 'Número da página.',
      required: false,
      type: 'integer',
      default: 1
    }
    #swagger.parameters['limit'] = {
      in: 'query',
      description: 'Número de cursos por página.',
      required: false,
      type: 'integer',
      default: 10
    }
    #swagger.responses[200] = {
      description: 'Cursos retornados com sucesso.',
      schema: {
        message: "Cursos retornados com sucesso.",
        courses: [{ $ref: "#/definitions/CourseGet" }]
      }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  CourseController.get,
);

courseRouter.get(
  '/v1/course/:id',
  /* 
    #swagger.tags = ["Courses"]
    #swagger.description = "Obtém um curso pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do curso.',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Curso retornado com sucesso.',
      schema: { 
        message: "Curso retornado com sucesso.",
        course: [{$ref: "#/definitions/CourseGet"}] 
      }
    }
    #swagger.responses[404] = {
      description: 'Curso não encontrado.',
      schema: { message: "Curso não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  CourseController.getById,
);

courseRouter.put(
  '/v1/course/:id',
  /* 
    #swagger.tags = ["Courses"]
    #swagger.description = "Atualiza um curso pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do curso.',
      required: true,
      type: 'string'
    }
    #swagger.parameters['CourseData'] = {
      in: 'body',
      description: 'Dados do curso.',
      required: true,
      schema: { $ref: "#/definitions/CoursePost" }
    }
    #swagger.responses[200] = {
      description: 'Curso atualizado com sucesso.',
      schema: { message: "Curso atualizado com sucesso.", updatedCourse: { $ref: "#/definitions/CourseGet" } }
    }
    #swagger.responses[400] = {
      description: 'Erro de validação dos dados.',
      schema: { message: "Preencha os dados corretamente." }
    }
    #swagger.responses[404] = {
      description: 'Curso não encontrado.',
      schema: { message: "Curso não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  CourseController.update,
);

courseRouter.delete(
  '/v1/course/:id',
  /* 
    #swagger.tags = ["Courses"]
    #swagger.description = "Deleta um curso pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do curso.',
      required: true,
      type: 'string'
    }
    #swagger.responses[204] = {
      description: 'Curso deletado com sucesso.'
    }
    #swagger.responses[404] = {
      description: 'Curso não encontrado.',
      schema: { message: "Curso não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  CourseController.delete,
);
