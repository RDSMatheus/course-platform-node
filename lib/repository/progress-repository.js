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
exports.ProgressRepository = void 0;
const course_model_1 = require("../models/course-model");
const progress_model_1 = require("../models/progress-model");
class ProgressRepository {
    completeVideo(videoProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { courseId, userId, videoId } = videoProgress;
            const progress = (yield progress_model_1.Progress.findOneAndUpdate({ user: userId, course: courseId }, { $addToSet: { completedVideos: videoId } }, { new: true, upsert: true }));
            return progress;
        });
    }
    completeModule(moduleProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const { courseId, moduleId, userId } = moduleProgress;
            const progress = (yield progress_model_1.Progress.findOneAndUpdate({ user: userId, course: courseId }, { $addToSet: { completedModule: moduleId } }, { new: true, upsert: true }));
            return progress;
        });
    }
    getProgress(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const progress = yield progress_model_1.Progress.findOne({ user: userId, course: courseId });
            if (progress &&
                progress.completedModule &&
                progress.completedModule.length > 0) {
                yield progress.populate('completedModule');
            }
            if (progress &&
                progress.completedVideos &&
                progress.completedVideos.length > 0) {
                yield progress.populate('completedVideos');
            }
            return progress;
        });
    }
    getCourseProgress(courseId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let progress = yield progress_model_1.Progress.findOne({ user: userId, course: courseId });
            const course = yield course_model_1.Course.findById(courseId)
                .populate({
                path: 'modules',
                populate: { path: 'videos' },
            })
                .lean();
            const totalVideos = course === null || course === void 0 ? void 0 : course.modules.reduce((acc, module) => acc + (module.videos.length || 0), 0);
            const completedVideos = progress === null || progress === void 0 ? void 0 : progress.completedVideos.length;
            let percentage = 0;
            if (completedVideos) {
                percentage = totalVideos ? (completedVideos / totalVideos) * 100 : 0;
            }
            return percentage.toFixed(2) + '%';
        });
    }
    deleteProgress(userId, courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield progress_model_1.Progress.findOneAndDelete({ user: userId, course: courseId });
        });
    }
}
exports.ProgressRepository = ProgressRepository;
//# sourceMappingURL=progress-repository.js.map