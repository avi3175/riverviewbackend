"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testimonialRoutes = void 0;
const express_1 = require("express");
const testimonial_controller_1 = require("./testimonial.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const role_middleware_1 = require("../../middlewares/role.middleware");
const router = (0, express_1.Router)();
// CREATE (USER, ADMIN, MANAGER)
router.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), testimonial_controller_1.TestimonialController.createTestimonial);
// GET ALL (PUBLIC)
router.get("/", testimonial_controller_1.TestimonialController.getAllTestimonials);
// GET SINGLE (PUBLIC)
router.get("/:id", testimonial_controller_1.TestimonialController.getSingleTestimonial);
// UPDATE (USER, ADMIN, MANAGER)
router.patch("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), testimonial_controller_1.TestimonialController.updateTestimonial);
// DELETE (USER, ADMIN, MANAGER)
router.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(["USER", "ADMIN", "MANAGER"]), testimonial_controller_1.TestimonialController.deleteTestimonial);
exports.testimonialRoutes = router;
