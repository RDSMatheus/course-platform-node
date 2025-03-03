import { Router } from 'express';
import { ModuleController } from '../controllers/module-controller';

export const moduleRouter = Router();

moduleRouter.post(
  '/v1/modules',
  /* 
    #swagger.tags = ["Modules"]
    #swagger.description = "Cria um novo módulo."
    #swagger.parameters['ModuleData'] = {
      in: 'body',
      description: 'Dados do módulo.',
      required: true,
      schema: { $ref: "#/definitions/ModulePost" }
    }
    #swagger.responses[201] = {
      description: 'Módulo criado com sucesso.',
      schema: { message: "Módulo criado com sucesso.", module: { $ref: "#/definitions/ModuleGet" } }
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
  ModuleController.post,
);

moduleRouter.get(
  '/v1/modules/:id',
  /* 
    #swagger.tags = ["Modules"]
    #swagger.description = "Obtém um módulo pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do módulo.',
      required: true,
      type: 'string'
    }
    #swagger.responses[200] = {
      description: 'Módulo retornado com sucesso.',
      schema:{
        message: "Módulo encontrado com sucesso.",
        module: { $ref: "#/definitions/ModuleGet" } }
    }
    #swagger.responses[404] = {
      description: 'Módulo não encontrado.',
      schema: { message: "Módulo não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ModuleController.getById,
);

moduleRouter.get(
  '/v1/modules',
  /* 
    #swagger.tags = ["Modules"]
    #swagger.description = "Obtém todos os módulos com paginação."
    #swagger.parameters['page'] = {
      in: 'query',
      description: 'Número da página.',
      required: false,
      type: 'integer',
      default: 1
    }
    #swagger.parameters['limit'] = {
      in: 'query',
      description: 'Número de módulos por página.',
      required: false,
      type: 'integer',
      default: 10
    }
    #swagger.responses[200] = {
      description: 'Módulos retornados com sucesso.',
      schema: {
        message: "Modulos retornados com sucesso.",
        modules: [ {$ref: "#/definitions/ModuleGet"} ]
      }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ModuleController.get,
);

moduleRouter.delete(
  '/v1/modules/:id',
  /* 
    #swagger.tags = ["Modules"]
    #swagger.description = "Deleta um módulo pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do módulo.',
      required: true,
      type: 'string'
    }
    #swagger.responses[204] = {
      description: 'Módulo deletado com sucesso.'
    }
    #swagger.responses[404] = {
      description: 'Módulo não encontrado.',
      schema: { message: "Módulo não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ModuleController.delete,
);

moduleRouter.put(
  '/v1/modules/:id',
  /* 
    #swagger.tags = ["Modules"]
    #swagger.description = "Atualiza um módulo pelo ID."
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do módulo.',
      required: true,
      type: 'string'
    }
    #swagger.parameters['ModuleData'] = {
      in: 'body',
      description: 'Dados do módulo.',
      required: true,
      schema: { $ref: "#/definitions/ModulePost" }
    }
    #swagger.responses[200] = {
      description: 'Módulo atualizado com sucesso.',
      schema: { 
        message: "Módulo atualizado com sucesso.", 
        module: { $ref: "#/definitions/ModuleGet" } }
    }
    #swagger.responses[400] = {
      description: 'Erro de validação dos dados.',
      schema: { message: "Preencha os dados corretamente." }
    }
    #swagger.responses[404] = {
      description: 'Módulo não encontrado.',
      schema: { message: "Módulo não encontrado." }
    }
    #swagger.responses[500] = {
      description: 'Erro interno do servidor.',
      schema: { message: "Erro interno do servidor." }
    }
  */
  ModuleController.update,
);
