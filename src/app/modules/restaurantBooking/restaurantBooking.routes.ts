import { Router } from "express";
import { RestaurantBookingController } from "./restaurantBooking.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (USER only)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["USER"]),
  RestaurantBookingController.createRestaurantBooking
);

// GET ALL (ADMIN, MANAGER see all, USER sees own)
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  RestaurantBookingController.getAllRestaurantBookings
);

// GET SINGLE
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  RestaurantBookingController.getSingleRestaurantBooking
);

// DELETE (USER can cancel own, ADMIN/MANAGER can delete any)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  RestaurantBookingController.deleteRestaurantBooking
);

export const restaurantBookingRoutes = router;