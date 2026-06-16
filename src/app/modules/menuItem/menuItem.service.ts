import { prisma } from "../../lib/prisma";

const prismaClient = prisma as any;

// CREATE
const createMenuItem = async (data: any) => {
  return await prismaClient.menuItem.create({ data });
};

// GET ALL
const getAllMenuItems = async (query: any) => {
  const { category, availability, page = 1, limit = 20 } = query;

  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const whereConditions: any = {
    ...(category && { category }),
    ...(availability !== undefined && { availability: availability === "true" }),
  };

  const [data, total] = await Promise.all([
    prismaClient.menuItem.findMany({
      where: whereConditions,
      skip,
      take: limitNumber,
      orderBy: { createdAt: "desc" },
    }),
    prismaClient.menuItem.count({ where: whereConditions }),
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
const getSingleMenuItem = async (id: number) => {
  return await prismaClient.menuItem.findUnique({ where: { id } });
};

// UPDATE
const updateMenuItem = async (id: number, data: any) => {
  return await prismaClient.menuItem.update({ where: { id }, data });
};

// DELETE
const deleteMenuItem = async (id: number) => {
  return await prismaClient.menuItem.delete({ where: { id } });
};

export const MenuItemService = {
  createMenuItem,
  getAllMenuItems,
  getSingleMenuItem,
  updateMenuItem,
  deleteMenuItem,
};