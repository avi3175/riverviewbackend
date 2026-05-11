import { Router } from "express";
import { UserController } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// MY PROFILE
router.get("/me", authMiddleware, UserController.getMyProfile);

// ADMIN ONLY - ALL USERS
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  UserController.getAllUsers
);

export const userRoutes = router;