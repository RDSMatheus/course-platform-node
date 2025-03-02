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
exports.UserServices = void 0;
const user_repository_1 = require("../repository/user-repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserServices {
    constructor() {
        this.userRepository = new user_repository_1.UserRepository();
    }
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf, email, name, password, passwordCheck } = body;
            const saltRounds = Number(process.env.SALT_ROUNDS);
            const existingUserEmail = yield this.userRepository.getByEmail(email);
            const existingUserCpf = yield this.userRepository.getByCpf(cpf);
            if (!cpf || !email || !name || !password) {
                throw new Error('É necessário enviar todos os dados.');
            }
            if (password !== passwordCheck) {
                throw new Error('As senhas não são correspondentes');
            }
            if (existingUserCpf) {
                throw new Error('Usuário com este CPF já cadastrado.');
            }
            if (existingUserEmail) {
                throw new Error('Usuário com este email já cadastrado.');
            }
            bcrypt_1.default.hash(password, saltRounds, (err, hash) => __awaiter(this, void 0, void 0, function* () {
                yield this.userRepository.post(Object.assign(Object.assign({}, body), { password: hash }));
            }));
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getByEmail(email);
        });
    }
    get(page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * pageSize;
            const pageSkip = skip || 1;
            const limit = pageSize || 10;
            const users = (yield this.userRepository.get(pageSkip, limit));
            if (!users)
                throw new Error('Não foi possivel retornar os usuários');
            return users;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira um id válido.');
            const user = this.userRepository.delete(id);
            if (!user)
                throw new Error('Usuário não encontrado.');
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira um id válido.');
            const { oldUser, updatedUser } = yield this.userRepository.update(id, body);
            if (!oldUser)
                throw new Error('Usuário não encontrado.');
            return updatedUser;
        });
    }
}
exports.UserServices = UserServices;
//# sourceMappingURL=user-services.js.map