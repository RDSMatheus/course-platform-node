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
exports.UserRepository = void 0;
const user_model_1 = require("../models/user-model");
class UserRepository {
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User(body);
            yield user.save();
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield user_model_1.User.findOne({ email }));
            return user;
        });
    }
    getByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield user_model_1.User.findOne({ cpf }));
            return user;
        });
    }
    get(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = (yield user_model_1.User.find().skip(page).limit(limit));
            return users;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield user_model_1.User.findById(id));
            yield user_model_1.User.findByIdAndDelete(id);
            return user;
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldUser = (yield user_model_1.User.findById(id));
            const updatedUser = (yield user_model_1.User.findByIdAndUpdate(id, body, {
                new: true,
            }));
            return { oldUser, updatedUser };
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map