"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_services_1 = require("../services/auth-services");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/v1/auth/login', 
/*
  #swagger.tags = ["Auth"]
    #swagger.description = "Retorna um token."
  #swagger.parameters["login"]= {
    in: "body",
    description: "Email e senha do usuário.",
    required: true,
    schema: {
      email: "string",
      password: "string"
    }
  } */
/*
#swagger.responses[200]= {
    description: "Token gerado com sucesso.",
    schema: {
    message: "Login gerado com sucesso.",
    token: "string"
    }
  }
#swagger.responses[404]= {
    description: "Email inválido, usuário não encontrado.",
    schema: {
    message: "Email inválido, usuário não encontrado.",
    }
  }
#swagger.responses[401]= {
    description: "Senha invalida.",
    schema: {
    message: "Email inválido, usuário não encontrado.",
    }
}
#swagger.responses[400]= {
    description: "Username e senha são obrigatórios.",
    schema: {
    message: "Username e senha são obrigatórios.",
    }
}
*/ auth_services_1.AuthServices.post);
//# sourceMappingURL=auth-routes.js.map