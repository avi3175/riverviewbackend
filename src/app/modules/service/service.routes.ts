import { Router } from "express";
import { ServiceController } from "./service.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (ADMIN, MANAGER)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  ServiceController.createService
);

// GET ALL (PUBLIC)
router.get("/", ServiceController.getAllServices);

// GET SINGLE (PUBLIC)
router.get("/:id", ServiceController.getSingleService);

// UPDATE (ADMIN, MANAGER)
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  ServiceController.updateService
);

// DELETE (ADMIN, MANAGER)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  ServiceController.deleteService
);

export const serviceRoutes = router;