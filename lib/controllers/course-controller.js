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
exports.CourseController = void 0;
const course_services_1 = require("../services/course-services");
class CourseController {
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new course_services_1.CourseServices().post(req.body);
                res.status(201).json({ message: 'Curso criado com sucesso.' });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const courses = yield new course_services_1.CourseServices().get();
                res
                    .status(200)
                    .json({ message: 'Cursos retornados com sucesso', courses });
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
                const course = yield new course_services_1.CourseServices().getById(id);
                res.status(200).json({ message: 'Curso encontrado.', course });
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
                yield new course_services_1.CourseServices().delete(id);
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
                const updatedCourse = yield new course_services_1.CourseServices().update(id, body);
                res
                    .status(200)
                    .json({ message: 'Curso atualizado com sucesso.', updatedCourse });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=course-controller.js.map