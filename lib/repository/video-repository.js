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
exports.VideoRepository = void 0;
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const fs_1 = __importDefault(require("fs"));
const video_model_1 = require("../models/video-model");
class VideoRepository {
    post(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.file) {
                    throw new Error('Nenhum arquivo enviado.');
                }
                const result = yield cloudinary_1.default.uploader.upload(req.file.path, {
                    folder: 'uploads',
                    resource_type: 'video',
                });
                fs_1.default.unlinkSync(req.file.path);
                const video = new video_model_1.Video(Object.assign(Object.assign({}, req.body), { url: result.secure_url }));
                yield video.save();
            }
            catch (error) {
                console.error('Erro ao fazer upload do vídeo:', error);
                throw error;
            }
        });
    }
    get(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const video = (yield video_model_1.Video.find().skip(page).limit(limit));
            return video;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const video = (yield video_model_1.Video.findById(id));
            return video;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield video_model_1.Video.deleteOne({ _id: id });
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateVideo = yield video_model_1.Video.findByIdAndUpdate(id, body);
            if (!updateVideo)
                throw new Error('Video não encontrado');
            const updatedVideo = (yield video_model_1.Video.findById(id));
            return updatedVideo;
        });
    }
}
exports.VideoRepository = VideoRepository;
//# sourceMappingURL=video-repository.js.map