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
exports.VideoController = void 0;
const video_services_1 = require("../services/video-services");
class VideoController {
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new video_services_1.VideoServices().post(req);
                res.status(201).json({ message: 'Video postado com sucesso.' });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
                console.log(error);
            }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, limit } = req.query;
                const video = yield new video_services_1.VideoServices().get(Number(page), Number(limit));
                res
                    .status(200)
                    .json({ message: 'Video encontrados com sucesso.', video });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const video = yield new video_services_1.VideoServices().getById(id);
                res.status(200).json({ message: 'Video encontrado.', video });
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
                yield new video_services_1.VideoServices().delete(id);
                res.status(204).json();
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
                const video = yield new video_services_1.VideoServices().update(id, body);
                res.status(200).json({ message: 'Video atualizado com sucesso', video });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.VideoController = VideoController;
//# sourceMappingURL=video-controller.js.map