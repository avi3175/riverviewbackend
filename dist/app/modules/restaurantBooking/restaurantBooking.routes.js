"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantBookingRoutes = void 0;
const express_1 = require("express");
const restaurantBooking_controller_1 = require("./restaurantBooking.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (USER only)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER"]), restaurantBooking_controller_1.RestaurantBookingController.createRestaurantBooking);
// GET ALL (ADMIN, MANAGER see all, USER sees own)
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), restaurantBooking_controller_1.RestaurantBookingController.getAllRestaurantBookings);
// GET SINGLE
router.get("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), restaurantBooking_controller_1.RestaurantBookingController.getSingleRestaurantBooking);
// DELETE (USER can cancel own, ADMIN/MANAGER can delete any)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), restaurantBooking_controller_1.RestaurantBookingController.deleteRestaurantBooking);
exports.restaurantBookingRoutes = router;
