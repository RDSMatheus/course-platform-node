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
exports.ModuleRepository = void 0;
const module_model_1 = require("../models/module-model");
class ModuleRepository {
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const module = new module_model_1.Module(body);
                yield module.save();
            }
            catch (error) {
                throw new Error('Erro ao salvar o módulo no servidor.');
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = (yield module_model_1.Module.findById(id));
            return module;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const modules = (yield module_model_1.Module.find());
            return modules;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = (yield module_model_1.Module.findById(id));
            yield module_model_1.Module.deleteOne({ _id: id });
            return module;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldModule = (yield module_model_1.Module.findById(id));
            const updatedModule = (yield module_model_1.Module.findByIdAndUpdate(id, body, {
                new: true,
            }));
            return [oldModule, updatedModule];
        });
    }
}
exports.ModuleRepository = ModuleRepository;
//# sourceMappingURL=module-repository.js.map