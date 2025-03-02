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
exports.VideoServices = void 0;
const video_repository_1 = require("../repository/video-repository");
class VideoServices {
    constructor() {
        this.videoRepository = new video_repository_1.VideoRepository();
    }
    post(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, title } = req.body;
            if (!description || !title) {
                throw new Error('Preenca os dados corretamente.');
            }
            if (!req.file) {
                throw new Error('Envie o video.');
            }
            yield this.videoRepository.post(req);
        });
    }
    get(page, pageSize) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * pageSize;
            const pageSkip = skip || 1;
            const limit = pageSize || 10;
            const video = yield this.videoRepository.get(pageSkip, limit);
            return video;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira o id do video.');
            const video = yield this.videoRepository.getById(id);
            return video;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira o id do video.');
            yield this.videoRepository.delete(id);
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Insira o id do video.');
            return yield this.videoRepository.update(id, body);
        });
    }
}
exports.VideoServices = VideoServices;
//# sourceMappingURL=video-services.js.map