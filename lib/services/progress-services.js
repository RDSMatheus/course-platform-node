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
exports.ProgressServices = void 0;
const progress_repository_1 = require("../repository/progress-repository");
class ProgressServices {
    constructor() {
        this._progressRepository = new progress_repository_1.ProgressRepository();
    }
    completeVideo(videoProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { courseId, userId, videoId } = videoProgress;
            if (!courseId || !userId || !videoId) {
                throw new Error('Insira todos o valores.');
            }
            return yield this._progressRepository.completeVideo(videoProgress);
        });
    }
    completeModule(moduleProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { courseId, moduleId, userId } = moduleProgress;
            if (!courseId || !userId || !moduleId) {
                throw new Error('Insira todos o valores.');
            }
            return yield this._progressRepository.completeModule(moduleProgress);
        });
    }
    getProgress(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!courseId || !userId) {
                throw new Error('Insira todos os valores.');
            }
            return yield this._progressRepository.getProgress(courseId, userId);
        });
    }
    getCourseProgress(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!courseId || !userId) {
                throw new Error('Insira todos os valores.');
            }
            return yield this._progressRepository.getCourseProgress(courseId, userId);
        });
    }
}
exports.ProgressServices = ProgressServices;
//# sourceMappingURL=progress-services.js.map