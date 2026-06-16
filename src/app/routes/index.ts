import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { packageRoutes } from "../modules/package/package.routes";
import { bookingRoutes } from "../modules/booking/booking.routes";
import { testimonialRoutes } from "../modules/testimonial/testimonial.routes";
import { menuItemRoutes } from "../modules/menuItem/menuItem.routes";
import { orderRoutes } from "../modules/order/order.routes";
import { serviceRoutes } from "../modules/service/service.routes";
import { restaurantBookingRoutes } from "../modules/restaurantBooking/restaurantBooking.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/packages", packageRoutes);
router.use("/bookings", bookingRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/menu-items", menuItemRoutes);
router.use("/orders", orderRoutes);
router.use("/services", serviceRoutes);
router.use("/restaurant-bookings", restaurantBookingRoutes);

export default router;
