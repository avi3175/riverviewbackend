"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = require("express");
const service_controller_1 = require("./service.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (ADMIN, MANAGER)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), service_controller_1.ServiceController.createService);
// GET ALL (PUBLIC)
router.get("/", service_controller_1.ServiceController.getAllServices);
// GET SINGLE (PUBLIC)
router.get("/:id", service_controller_1.ServiceController.getSingleService);
// UPDATE (ADMIN, MANAGER)
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), service_controller_1.ServiceController.updateService);
// DELETE (ADMIN, MANAGER)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), service_controller_1.ServiceController.deleteService);
exports.serviceRoutes = router;
