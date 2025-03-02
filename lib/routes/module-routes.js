"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleRouter = void 0;
const express_1 = require("express");
const module_controller_1 = require("../controllers/module-controller");
exports.moduleRouter = (0, express_1.Router)();
exports.moduleRouter.post('/v1/modules', module_controller_1.ModuleController.post);
exports.moduleRouter.get('/v1/modules/:id', module_controller_1.ModuleController.getById);
exports.moduleRouter.get('/v1/modules', module_controller_1.ModuleController.get);
exports.moduleRouter.delete('/v1/modules/:id', module_controller_1.ModuleController.delete);
exports.moduleRouter.patch('/v1/modules/:id', module_controller_1.ModuleController.update);
//# sourceMappingURL=module-routes.js.map