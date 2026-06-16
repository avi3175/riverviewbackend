"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageRoutes = void 0;
const express_1 = require("express");
const package_controller_1 = require("./package.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const package_validation_1 = require("./package.validation");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (ADMIN ONLY)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), (0, validateRequest_1.validateRequest)(package_validation_1.createPackageSchema), package_controller_1.PackageController.createPackage);
// GET ALL (PUBLIC)
router.get("/", package_controller_1.PackageController.getAllPackages);
// FEATURED (PUBLIC)
router.get("/featured", package_controller_1.PackageController.getFeaturedPackages);
// GET SINGLE (PUBLIC)
router.get("/:id", package_controller_1.PackageController.getSinglePackage);
// UPDATE (ADMIN ONLY)
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), package_controller_1.PackageController.updatePackage);
// DELETE (ADMIN ONLY)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["ADMIN", "MANAGER"]), package_controller_1.PackageController.deletePackage);
exports.packageRoutes = router;
