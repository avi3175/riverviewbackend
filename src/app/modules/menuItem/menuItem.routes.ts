import { Router } from "express";
import { MenuItemController } from "./menuItem.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (ADMIN, MANAGER)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  MenuItemController.createMenuItem
);

// GET ALL (PUBLIC)
router.get("/", MenuItemController.getAllMenuItems);

// GET SINGLE (PUBLIC)
router.get("/:id", MenuItemController.getSingleMenuItem);

// UPDATE (ADMIN, MANAGER)
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  MenuItemController.updateMenuItem
);

// DELETE (ADMIN, MANAGER)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  MenuItemController.deleteMenuItem
);

export const menuItemRoutes = router;