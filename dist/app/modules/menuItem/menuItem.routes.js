"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRoutes = void 0;
const express_1 = require("express");
const menuItem_controller_1 = require("./menuItem.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (ADMIN, MANAGER)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), menuItem_controller_1.MenuItemController.createMenuItem);
// GET ALL (PUBLIC)
router.get("/", menuItem_controller_1.MenuItemController.getAllMenuItems);
// GET SINGLE (PUBLIC)
router.get("/:id", menuItem_controller_1.MenuItemController.getSingleMenuItem);
// UPDATE (ADMIN, MANAGER)
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), menuItem_controller_1.MenuItemController.updateMenuItem);
// DELETE (ADMIN, MANAGER)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), menuItem_controller_1.MenuItemController.deleteMenuItem);
exports.menuItemRoutes = router;
