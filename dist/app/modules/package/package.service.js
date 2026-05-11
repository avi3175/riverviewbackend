"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
const prisma_1 = require("../../lib/prisma");
// CREATE
const createPackage = async (data) => {
    return await prisma_1.prisma.package.create({
        data,
    });
};
// GET ALL (WITH SEARCH + FILTER)
const getAllPackages = async (query) => {
    const { search, category, minPrice, maxPrice, page = 1, limit = 10, sort = "latest", } = query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const whereConditions = {
        ...(search && {
            title: {
                contains: search,
                mode: "insensitive",
            },
        }),
        ...(category && { category }),
        ...((minPrice || maxPrice) && {
            price: {
                gte: minPrice ? Number(minPrice) : undefined,
                lte: maxPrice ? Number(maxPrice) : undefined,
            },
        }),
    };
    // 🧠 SORT LOGIC
    let orderBy = { createdAt: "desc" }; // default = latest
    if (sort === "price_asc") {
        orderBy = { price: "asc" };
    }
    if (sort === "price_desc") {
        orderBy = { price: "desc" };
    }
    if (sort === "oldest") {
        orderBy = { createdAt: "asc" };
    }
    if (sort === "latest") {
        orderBy = { createdAt: "desc" };
    }
    const [data, total] = await Promise.all([
        prisma_1.prisma.package.findMany({
            where: whereConditions,
            skip,
            take: limitNumber,
            orderBy,
        }),
        prisma_1.prisma.package.count({
            where: whereConditions,
        }),
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
const getSinglePackage = async (id) => {
    return await prisma_1.prisma.package.findUnique({
        where: { id },
    });
};
// DELETE
const deletePackage = async (id) => {
    return await prisma_1.prisma.package.delete({
        where: { id },
    });
};
// UPDATE
const updatePackage = async (id, data) => {
    return await prisma_1.prisma.package.update({
        where: { id },
        data,
    });
};
const getFeaturedPackages = async () => {
    return await prisma_1.prisma.package.findMany({
        where: {
            isFeatured: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.PackageService = {
    createPackage,
    getAllPackages,
    getSinglePackage,
    deletePackage,
    updatePackage,
    getFeaturedPackages,
};
