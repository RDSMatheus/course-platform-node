"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("../utils/multer"));
const video_controller_1 = require("../controllers/video-controller");
exports.videoRouter = (0, express_1.Router)();
exports.videoRouter.post('/v1/video', multer_1.default.single('video'), video_controller_1.VideoController.post);
exports.videoRouter.get('/v1/video', video_controller_1.VideoController.get);
exports.videoRouter.get('/v1/video/:id', video_controller_1.VideoController.getById);
exports.videoRouter.delete('/v1/video/:id', video_controller_1.VideoController.delete);
exports.videoRouter.patch('/v1/video/:id', video_controller_1.VideoController.update);
//# sourceMappingURL=video-routes.js.map