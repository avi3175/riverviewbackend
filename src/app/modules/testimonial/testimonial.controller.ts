import type { Request, Response } from "express";
import { TestimonialService } from "./testimonial.service";

const createTestimonial = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await TestimonialService.createTestimonial({
      ...req.body,
      userId: user.id,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create testimonial",
      error: error.message,
    });
  }
};

const getAllTestimonials = async (req: Request, res: Response) => {
  try {
    const result = await TestimonialService.getAllTestimonials();

    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
      error: error.message,
    });
  }
};

const getSingleTestimonial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await TestimonialService.getSingleTestimonial(id);

    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonial",
      error: error.message,
    });
  }
};

const updateTestimonial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await TestimonialService.updateTestimonial(id, req.body);

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update testimonial",
      error: error.message,
    });
  }
};

const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await TestimonialService.deleteTestimonial(id);

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete testimonial",
      error: error.message,
    });
  }
};

export const TestimonialController = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
};