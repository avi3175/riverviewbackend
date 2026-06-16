"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (USER only - must have a booking)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER"]), order_controller_1.OrderController.createOrder);
// GET ALL (ADMIN, MANAGER see all, USER sees own)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), order_controller_1.OrderController.getAllOrders);
// GET SINGLE
router.get("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), order_controller_1.OrderController.getSingleOrder);
// DELETE (ADMIN, MANAGER)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), order_controller_1.OrderController.deleteOrder);
exports.orderRoutes = router;
