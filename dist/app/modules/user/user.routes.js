"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// MY PROFILE
router.get("/me", auth_middleware_1.authMiddleware, user_controller_1.UserController.getMyProfile);
// ADMIN ONLY - ALL USERS
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN"]), user_controller_1.UserController.getAllUsers);
exports.userRoutes = router;
