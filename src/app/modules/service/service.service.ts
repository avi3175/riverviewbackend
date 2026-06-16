import { prisma } from "../../lib/prisma";

const db = prisma as any;

// CREATE
const createService = async (data: any) => {
  return await db.service.create({ data });
};

// GET ALL
const getAllServices = async (query: any) => {
  const { availability, page = 1, limit = 20 } = query;
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const whereConditions: any = {};
  if (availability !== undefined) {
    whereConditions.availability = availability === "true";
  }

  const [data, total] = await Promise.all([
    db.service.findMany({
      where: whereConditions,
      skip,
      take: limitNumber,
      orderBy: { createdAt: "desc" },
    }),
    db.service.count({ where: whereConditions }),
  ]);

  return {
    data,
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
      totalPages: Math.ceil(total / limitNumber),
    },
  };
};

// GET SINGLE
const getSingleService = async (id: number) => {
  return await db.service.findUnique({ where: { id } });
};

// UPDATE
const updateService = async (id: number, data: any) => {
  return await db.service.update({ where: { id }, data });
};

// DELETE
const deleteService = async (id: number) => {
  return await db.service.delete({ where: { id } });
};

export const ServiceService = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};