"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user-routes");
const video_routes_1 = require("./video-routes");
const module_routes_1 = require("./module-routes");
const course_routes_1 = require("./course-routes");
const auth_routes_1 = require("./auth-routes");
const routes = (app) => {
    app.use((0, express_1.json)());
    app.use(user_routes_1.userRouter);
    app.use(video_routes_1.videoRouter);
    app.use(module_routes_1.moduleRouter);
    app.use(course_routes_1.courseRouter);
    app.use(auth_routes_1.authRouter);
};
exports.routes = routes;
//# sourceMappingURL=index.js.map