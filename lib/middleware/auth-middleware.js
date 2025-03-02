"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleWare = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleWare = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const secretKey = process.env.SECRET_KEY;
    if (!token) {
        res.status(401).json({ message: 'Forneça um token.' });
    }
    try {
        if (token && secretKey) {
            jsonwebtoken_1.default.verify(token, secretKey);
            next();
        }
    }
    catch (error) {
        res.status(403).json({ message: 'Token inválido ou expirado!' });
    }
};
exports.authMiddleWare = authMiddleWare;
//# sourceMappingURL=auth-middleware.js.map