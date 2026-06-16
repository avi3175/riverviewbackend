import { Router } from "express";
import { TestimonialController } from "./testimonial.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { roleMiddleware } from "../../middlewares/role.middleware";

const router = Router();

// CREATE (USER, ADMIN, MANAGER)
router.post(
  "/",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  TestimonialController.createTestimonial
);

// GET ALL (PUBLIC)
router.get("/", TestimonialController.getAllTestimonials);

// GET SINGLE (PUBLIC)
router.get("/:id", TestimonialController.getSingleTestimonial);

// UPDATE (USER, ADMIN, MANAGER)
router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  TestimonialController.updateTestimonial
);

// DELETE (USER, ADMIN, MANAGER)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN", "MANAGER"]),
  TestimonialController.deleteTestimonial
);

export const testimonialRoutes = router;