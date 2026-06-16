import { Router } from "express";
import { BookingController } from "./booking.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// USER BOOKING CREATE
router.post("/", authMiddleware, BookingController.createBooking);

// USER VIEW OWN BOOKINGS
router.get("/me", authMiddleware, BookingController.getUserBookings);

// ADMIN VIEW ALL BOOKINGS
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  BookingController.getAllBookings
);

// DELETE BOOKING
router.delete(
  "/:id",
  authMiddleware,
  BookingController.deleteBooking
);

export const bookingRoutes = router;