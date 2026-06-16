import { Router } from "express";
import { PackageController } from "./package.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createPackageSchema } from "./package.validation";

import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (ADMIN ONLY)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  validateRequest(createPackageSchema),
  PackageController.createPackage
);

// GET ALL (PUBLIC)
router.get("/", PackageController.getAllPackages);

// FEATURED (PUBLIC)
router.get("/featured", PackageController.getFeaturedPackages);

// GET SINGLE (PUBLIC)
router.get("/:id", PackageController.getSinglePackage);

// UPDATE (ADMIN ONLY)
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  PackageController.updatePackage
);

// DELETE (ADMIN ONLY)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN", "MANAGER"]),
  PackageController.deletePackage
);

export const packageRoutes = router;