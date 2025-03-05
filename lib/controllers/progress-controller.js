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
exports.ProgressController = void 0;
const progress_services_1 = require("./../services/progress-services");
class ProgressController {
    static completeVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const progress = yield new progress_services_1.ProgressServices().completeVideo(body);
                res
                    .status(200)
                    .json({ message: 'Video concluído com sucesso', progress });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'An unknown error occurred' });
                }
            }
        });
    }
    static completeModule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { body } = req;
                const progress = yield new progress_services_1.ProgressServices().completeModule(body);
                res
                    .status(200)
                    .json({ message: 'Modulo concluído com sucesso', progress });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error.' });
                }
            }
        });
    }
    static getProgress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, courseId } = req.params;
                const progress = yield new progress_services_1.ProgressServices().getProgress(courseId, userId);
                res.status(200).json({ message: 'Progresso retornado', progress });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error.' });
                }
            }
        });
    }
    static getCourseProgress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { courseId, userId } = req.params;
                const progress = yield new progress_services_1.ProgressServices().getCourseProgress(courseId, userId);
                res.status(200).json({ message: 'Progresso retornado', progress });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error' });
                }
            }
        });
    }
    static deleteProgress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, courseId } = req.params;
                yield new progress_services_1.ProgressServices().deleteProgress(userId, courseId);
                res.status(204).send();
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error.' });
                }
            }
        });
    }
}
exports.ProgressController = ProgressController;
//# sourceMappingURL=progress-controller.js.map