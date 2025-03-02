"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleController = void 0;
const module_services_1 = require("../services/module-services");
class ModuleController {
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new module_services_1.ModuleServices().post(req.body);
                res.status(201).json({ message: 'Módulo criado com sucesso.' });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: error.message });
            }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const module = yield new module_services_1.ModuleServices().getById(id);
                res
                    .status(200)
                    .json({ message: 'Módulo encontrado com sucesso', module });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const modules = yield new module_services_1.ModuleServices().get();
                res.status(200).json({ message: 'Módulos retornados', modules });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield new module_services_1.ModuleServices().delete(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { body } = req;
                const updatedModule = yield new module_services_1.ModuleServices().update(id, body);
                res.status(200).json({
                    message: 'Módulo atualizado com sucesso.',
                    module: updatedModule,
                });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.ModuleController = ModuleController;
//# sourceMappingURL=module-controller.js.map