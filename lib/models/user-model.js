"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    signUpDate: { type: Date, default: Date.now },
    premiumAccess: { type: Boolean, default: false },
    paidAccess: { type: Boolean, default: false },
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=user-model.js.map