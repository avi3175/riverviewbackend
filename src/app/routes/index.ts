import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { packageRoutes } from "../modules/package/package.routes";
import { bookingRoutes } from "../modules/booking/booking.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/packages", packageRoutes);
router.use("/bookings", bookingRoutes);

export default router;