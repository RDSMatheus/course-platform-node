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
exports.CourseServices = void 0;
const course_respository_1 = require("../repository/course-respository");
class CourseServices {
    constructor() {
        this.courseRepository = new course_respository_1.CourseRepository();
    }
    post(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { description, modules, price, title } = body;
            if (!description || !modules || !price || !title) {
                throw new Error('Envie todos os dados.');
            }
            yield this.courseRepository.post(body);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.get();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Envie um id válido');
            const course = yield this.courseRepository.getById(id);
            if (!course)
                throw new Error('Não foi possivel encontrar o curso.');
            return course;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new Error('Envie um id válido.');
            const course = yield this.courseRepository.delete(id);
            if (!course)
                throw new Error('Curso não encontrado.');
        });
    }
    update(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const [oldCourse, newCourse] = yield this.courseRepository.update(id, body);
            if (!oldCourse)
                throw new Error('Curso não encontrado.');
            return newCourse;
        });
    }
}
exports.CourseServices = CourseServices;
//# sourceMappingURL=course-services.js.map