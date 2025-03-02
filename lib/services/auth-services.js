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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user-model");
class AuthServices {
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const secretKey = String(process.env.SECRET_KEY);
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ message: 'Username e senha são obrigatórios.' });
                return;
            }
            try {
                const user = yield user_model_1.User.findOne({ email });
                if (!user) {
                    res
                        .status(404)
                        .json({ message: 'Email inválido, usuário não encontrado.' });
                    return;
                }
                const isPasswordValid = bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
                if (!isPasswordValid) {
                    res.status(401).json({ message: 'Senha invalida.' });
                    return;
                }
                const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.name }, secretKey, {
                    expiresIn: '1h',
                });
                res.status(200).json({ message: 'Login gerado com sucesso', token });
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: 'Erro interno do servidor.', error: error.message });
            }
        });
    }
}
exports.AuthServices = AuthServices;
//# sourceMappingURL=auth-services.js.map