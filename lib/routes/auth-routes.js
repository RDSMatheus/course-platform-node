"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_services_1 = require("../services/auth-services");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/v1/auth/login', auth_services_1.AuthServices.post);
//# sourceMappingURL=auth-routes.js.map