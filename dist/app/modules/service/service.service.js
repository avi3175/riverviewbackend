"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const prisma_1 = require("../../lib/prisma");
const db = prisma_1.prisma;
// CREATE
const createService = async (data) => {
    return await db.service.create({ data });
};
// GET ALL
const getAllServices = async (query) => {
    const { availability, page = 1, limit = 20 } = query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const whereConditions = {};
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
const getSingleService = async (id) => {
    return await db.service.findUnique({ where: { id } });
};
// UPDATE
const updateService = async (id, data) => {
    return await db.service.update({ where: { id }, data });
};
// DELETE
const deleteService = async (id) => {
    return await db.service.delete({ where: { id } });
};
exports.ServiceService = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
};
