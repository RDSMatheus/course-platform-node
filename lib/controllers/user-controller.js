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
exports.UserController = void 0;
const user_services_1 = require("../services/user-services");
class UserController {
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new user_services_1.UserServices().post(req.body);
                res.status(201).json({ message: 'Usuário criado' });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static getByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.params;
                const user = yield new user_services_1.UserServices().getByEmail(email);
                res.status(200).json({ message: 'Usuário retornado.', user });
            }
            catch (error) { }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, limit } = req.query;
                console.log(page, limit);
                const users = yield new user_services_1.UserServices().get(Number(page), Number(limit));
                res.status(200).json({ message: 'Usuários retornados.', users });
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
                yield new user_services_1.UserServices().delete(id);
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
                const updatedUser = yield new user_services_1.UserServices().update(id, body);
                res
                    .status(200)
                    .json({ message: 'Usuário atualizado com sucesso', updatedUser });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map