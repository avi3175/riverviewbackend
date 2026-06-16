"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemService = void 0;
const prisma_1 = require("../../lib/prisma");
const prismaClient = prisma_1.prisma;
// CREATE
const createMenuItem = async (data) => {
    return await prismaClient.menuItem.create({ data });
};
// GET ALL
const getAllMenuItems = async (query) => {
    const { category, availability, page = 1, limit = 20 } = query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const whereConditions = {
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
const getSingleMenuItem = async (id) => {
    return await prismaClient.menuItem.findUnique({ where: { id } });
};
// UPDATE
const updateMenuItem = async (id, data) => {
    return await prismaClient.menuItem.update({ where: { id }, data });
};
// DELETE
const deleteMenuItem = async (id) => {
    return await prismaClient.menuItem.delete({ where: { id } });
};
exports.MenuItemService = {
    createMenuItem,
    getAllMenuItems,
    getSingleMenuItem,
    updateMenuItem,
    deleteMenuItem,
};
