"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialService = void 0;
const prisma_1 = require("../../lib/prisma");
const db = prisma_1.prisma;
// CREATE
const createTestimonial = async (data) => {
    return await db.testimonial.create({ data });
};
// GET ALL
const getAllTestimonials = async () => {
    return await db.testimonial.findMany({
        orderBy: { createdAt: "desc" },
        include: { user: { select: { id: true, name: true, email: true } } },
    });
};
// GET SINGLE
const getSingleTestimonial = async (id) => {
    return await db.testimonial.findUnique({
        where: { id },
        include: { user: { select: { id: true, name: true, email: true } } },
    });
};
// UPDATE
const updateTestimonial = async (id, data) => {
    return await db.testimonial.update({
        where: { id },
        data,
    });
};
// DELETE
const deleteTestimonial = async (id) => {
    return await db.testimonial.delete({ where: { id } });
};
exports.TestimonialService = {
    createTestimonial,
    getAllTestimonials,
    getSingleTestimonial,
    updateTestimonial,
    deleteTestimonial,
};
