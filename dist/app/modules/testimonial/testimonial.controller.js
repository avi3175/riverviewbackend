"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialController = void 0;
const testimonial_service_1 = require("./testimonial.service");
const createTestimonial = async (req, res) => {
    try {
        const user = req.user;
        const result = await testimonial_service_1.TestimonialService.createTestimonial({
            ...req.body,
            userId: user.id,
        });
        res.status(201).json({
            success: true,
            message: "Testimonial created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create testimonial",
            error: error.message,
        });
    }
};
const getAllTestimonials = async (req, res) => {
    try {
        const result = await testimonial_service_1.TestimonialService.getAllTestimonials();
        res.status(200).json({
            success: true,
            message: "Testimonials fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch testimonials",
            error: error.message,
        });
    }
};
const getSingleTestimonial = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await testimonial_service_1.TestimonialService.getSingleTestimonial(id);
        res.status(200).json({
            success: true,
            message: "Testimonial fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch testimonial",
            error: error.message,
        });
    }
};
const updateTestimonial = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await testimonial_service_1.TestimonialService.updateTestimonial(id, req.body);
        res.status(200).json({
            success: true,
            message: "Testimonial updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update testimonial",
            error: error.message,
        });
    }
};
const deleteTestimonial = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await testimonial_service_1.TestimonialService.deleteTestimonial(id);
        res.status(200).json({
            success: true,
            message: "Testimonial deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete testimonial",
            error: error.message,
        });
    }
};
exports.TestimonialController = {
    createTestimonial,
    getAllTestimonials,
    getSingleTestimonial,
    updateTestimonial,
    deleteTestimonial,
};
