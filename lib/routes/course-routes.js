"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRouter = void 0;
const express_1 = require("express");
const course_controller_1 = require("../controllers/course-controller");
exports.courseRouter = (0, express_1.Router)();
exports.courseRouter.post('/v1/course', course_controller_1.CourseController.post);
exports.courseRouter.get('/v1/course', course_controller_1.CourseController.get);
exports.courseRouter.get('/v1/course/:id', course_controller_1.CourseController.getById);
exports.courseRouter.put('/v1/course/:id', course_controller_1.CourseController.update);
exports.courseRouter.delete('/v1/course/:id', course_controller_1.CourseController.delete);
//# sourceMappingURL=course-routes.js.map