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
exports.CourseRepository = void 0;
const course_model_1 = require("../models/course-model");
class CourseRepository {
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const course = new course_model_1.Course(body);
                yield course.save();
            }
            catch (error) {
                throw new Error('Erro ao tentar criar curso.');
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = (yield course_model_1.Course.findById(id));
            return course;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield course_model_1.Course.findByIdAndDelete(id);
            return (yield course_model_1.Course.findById(id));
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldCourse = (yield course_model_1.Course.findById(id));
            const updatedCourse = (yield course_model_1.Course.findByIdAndUpdate(id, body));
            return [oldCourse, updatedCourse];
        });
    }
}
exports.CourseRepository = CourseRepository;
//# sourceMappingURL=course-respository.js.map