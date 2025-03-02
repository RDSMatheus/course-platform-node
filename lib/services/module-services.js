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
exports.ModuleServices = void 0;
const module_repository_1 = require("../repository/module-repository");
class ModuleServices {
    constructor() {
        this.moduleRepository = new module_repository_1.ModuleRepository();
    }
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, title, videos, introVideo } = body;
            if (!description || !title || !videos || !introVideo) {
                throw new Error('Preencha todos os dados.');
            }
            yield this.moduleRepository.post(body);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira um id.');
            return yield this.moduleRepository.getById(id);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.moduleRepository.get();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira um id.');
            const module = yield this.moduleRepository.delete(id);
            if (!module)
                throw new Error('Módulo inexistente.');
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira um id.');
            const [oldModule, newModule] = yield this.moduleRepository.update(id, body);
            if (!oldModule)
                throw new Error('Módulo não encontrado.');
            return newModule;
        });
    }
}
exports.ModuleServices = ModuleServices;
//# sourceMappingURL=module-services.js.map