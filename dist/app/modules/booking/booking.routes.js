"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// USER BOOKING CREATE
router.post("/", auth_middleware_1.authMiddleware, booking_controller_1.BookingController.createBooking);
// USER VIEW OWN BOOKINGS
router.get("/me", auth_middleware_1.authMiddleware, booking_controller_1.BookingController.getUserBookings);
// ADMIN VIEW ALL BOOKINGS
router.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), booking_controller_1.BookingController.getAllBookings);
// DELETE BOOKING
router.delete("/:id", auth_middleware_1.authMiddleware, booking_controller_1.BookingController.deleteBooking);
exports.bookingRoutes = router;
