import { prisma } from "../../lib/prisma";

const db = prisma as any;

// CREATE
const createTestimonial = async (data: any) => {
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
const getSingleTestimonial = async (id: number) => {
  return await db.testimonial.findUnique({
    where: { id },
    include: { user: { select: { id: true, name: true, email: true } } },
  });
};

// UPDATE
const updateTestimonial = async (id: number, data: any) => {
  return await db.testimonial.update({
    where: { id },
    data,
  });
};

// DELETE
const deleteTestimonial = async (id: number) => {
  return await db.testimonial.delete({ where: { id } });
};

export const TestimonialService = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
};