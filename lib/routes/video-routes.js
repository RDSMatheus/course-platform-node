"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("../utils/multer"));
const video_controller_1 = require("../controllers/video-controller");
exports.videoRouter = (0, express_1.Router)();
exports.videoRouter.post('/v1/video', 
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
multer_1.default.single('video'), video_controller_1.VideoController.post);
exports.videoRouter.get('/v1/video', 
/*
#swagger.tags = ["Videos"]
#swagger.description = "Retorna todos os videos paginados."
#swagger.parameters["page"] = {
  in: "query",
  description: "Número da página. Default = 1",
  type: "integer",
 
}
#swagger.parameters["limit"] = {
  in: "query",
  description: "Número de videos. Default = 10",
  type: "integer",

}
#swagger.responses[200] = {
  description: "Videos retornados com sucesso.",
  schema: {
    message: "Videos encontrados com sucesso.",
    video: [
      {$ref: "#/definitions/VideoGet"}
    ]
  }
}
 */ video_controller_1.VideoController.get);
exports.videoRouter.get('/v1/video/:id', 
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
*/ video_controller_1.VideoController.getById);
exports.videoRouter.delete('/v1/video/:id', 
/*
#swagger.tags = ["Videos"]
#swagger.description = "Deleta um video pelo id."
#swagger.parameters["id"]= {
  in: "params",
  description: "Id no video.",
  required: true,
}
#swagger.responses[204] = {
  description: "Video deletado com sucesso."
}
#swagger.responses[400] = {
  description: "Video não existe."
}
*/
video_controller_1.VideoController.delete);
exports.videoRouter.put('/v1/video/:id', 
/*
#swagger.tags = ["Videos"]
#swagger.description = "Atualiza o video através do id."
#swagger.parameters['title'] = {
  in: 'formData',
  description: 'Título do vídeo',
  type: 'string'
}
#swagger.parameters['description'] = {
  in: 'formData',
  description: 'Descrição do vídeo',
  type: 'string'
}
#swagger.parameters['video'] = {
  in: 'formData',
  description: 'Arquivo de vídeo',
  type: 'file'
}
#swagger.responses[200]= {
  description: "Video atualizado com sucesso."
  
}

*/
multer_1.default.single('video'), video_controller_1.VideoController.update);
//# sourceMappingURL=video-routes.js.map