import { Router } from 'express';
import { UserController } from '../controllers/user-controller';
import { authMiddleWare } from '../middleware/auth-middleware';

export const userRouter = Router();

userRouter.post(
  '/v1/user',
  /* 
    #swagger.tags = ["Users"]
      #swagger.description = "Posta um novo usuário." */ /* #swagger.parameters['UserData'] = {
            in: 'body',
            description: 'Dados do usuário.',
            required: true,
            schema: { $ref: "#/definitions/UserPost" }
            } */
  /* #swagger.responses[201]= {
  description: 'Usuário criado com sucesso.',
  schema: {message: "Usuário criado com sucesso."}}
   #swagger.responses[400]= {
  description: 'Usuário criado com sucesso.',
  schema: {message: "As senhas não coincidem."}}
  /* #swagger.responses[500]= {
  description: 'Dados invalidados.'}*/
  UserController.post,
);
userRouter.get(
  '/v1/user/:email',
  /* 
    #swagger.tags = ["Users"]
      #swagger.description = "Obtém usuário através do email. Requer token de autorização" */ /* #swagger.parameters['email'] = {
            in: 'path',
            description: 'Email do usuário.',
            required: true,
            
            } */
  /* #swagger.responses[200]= {
  description: 'Usuário retornado com sucesso.', schema: {
  message: "Usuário retornado com sucesso",
  user: {$ref: "#/definitions/UserGet"}
}}
  /* #swagger.responses[500]= {
  description: 'Dados invalidados.'}*/
  UserController.getByEmail,
);
userRouter.get(
  '/v1/user',
  /* 
    #swagger.tags = ["Users"]
      #swagger.description = "Obtém usuários paginados. Requer token de autorização" */ /* #swagger.parameters['page'] = {
            in: 'query',
            description: 'Número da página.',
            type: "integer",
            required: true,
            
            },
      #swagger.parameters["limit"] = {
            in: 'query',
            description: 'Número de usuários.',
            type: "integer",
            required: true,
            
            } */
  /* #swagger.responses[200]= {
  description: 'Usuários retornados com sucesso.', schema: { message: "Usuário retornados.", users: { type: "array", items: {$ref: "#/definitions/UserGet"}}
   
}}
  /* #swagger.responses[500]= {
  description: 'Dados invalidados.'}*/
  UserController.get,
);
userRouter.delete(
  '/v1/user/:id',
  /* 
    #swagger.tags = ["Users"]
      #swagger.description = "Deleta usuário através do id. Requer token de autorização" */ /* #swagger.parameters['id'] = {
            in: 'path',
            description: 'Id do usuário.',
            required: true,
            
            } */
  /* #swagger.responses[204]= {
  description: 'Usuário deletado com sucesso.'
}
  /* #swagger.responses[500]= {
  description: 'Dados invalidados.'}*/ authMiddleWare,
  UserController.delete,
);
userRouter.put(
  '/v1/user/:id' /* 
  #swagger.tags = ["Users"]
    #swagger.description = "Atualiza o usuário através do id. Requer token de autorização" */,
  /* #swagger.parameters['id'] = {
          in: 'path',
          description: 'Id do usuário.',
          required: true,
          
          },
     #swagger.parameters['body'] = {
      in: 'body',
      description: 'Enviar somente campos que serão alterados.',
      required: true,
      schema: { $ref: "#/definitions/UserUpdate" }
    }
    #swagger.responses[200] = {
      description: 'Usuário atualizado com sucesso.',
      schema: { message: "Usuário atualizado com sucesso.", updatedUser:{  $ref: "#/definitions/UserGet"} }
    } */
  /* #swagger.responses[200]= {
description: 'Usuário retornado com sucesso.', schema: {
        message: 'Usuário atualizado com sucesso',
        updatedUser: { $ref: "#/definitions/UserGet" }
  }}
/* #swagger.responses[500]= {
description: 'Dados invalidados.'}*/
  UserController.update,
);
