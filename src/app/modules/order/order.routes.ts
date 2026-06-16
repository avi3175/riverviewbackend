import { Router } from "express";
import { OrderController } from "./order.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (USER only - must have a booking)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["USER"]),
  OrderController.createOrder
);

// GET ALL (ADMIN, MANAGER see all, USER sees own)
router.get(
  "/",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  OrderController.getAllOrders
);

// GET SINGLE
router.get(
  "/:id",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  OrderController.getSingleOrder
);

// DELETE (ADMIN, MANAGER)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  OrderController.deleteOrder
);

export const orderRoutes = router;