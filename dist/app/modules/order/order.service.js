"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = require("../../lib/prisma");
const prismaAny = prisma_1.prisma;
// CREATE
const createOrder = async (data) => {
    const { userId, menuItemId, bookingId, date, quantity, notes } = data;
    // Validate the booking exists and belongs to user
    const booking = await prisma_1.prisma.booking.findUnique({
        where: { id: bookingId },
    });
    if (!booking) {
        throw new Error("Booking not found");
    }
    if (booking.userId !== userId) {
        throw new Error("This booking does not belong to you");
    }
    // The order date must match the booking date exactly (same day)
    const orderDate = new Date(date);
    const bookingDate = new Date(booking.date);
    // Compare dates (ignore time)
    const orderDateStr = orderDate.toISOString().split("T")[0];
    const bookingDateStr = bookingDate.toISOString().split("T")[0];
    if (orderDateStr !== bookingDateStr) {
        throw new Error("Order date must match your booking date. You can only order food for the same date as your room booking.");
    }
    // Validate the menu item exists and is available
    const menuItem = await prisma_1.prisma.menuItem.findUnique({
        where: { id: menuItemId },
    });
    if (!menuItem) {
        throw new Error("Menu item not found");
    }
    if (!menuItem.availability) {
        throw new Error("Menu item is not available");
    }
    return await prismaAny.order.create({
        data: {
            userId,
            menuItemId,
            bookingId,
            date: orderDate,
            quantity: quantity || 1,
            notes,
        },
        include: {
            menuItem: true,
            booking: true,
        },
    });
};
// GET ALL (ADMIN/MANAGER: all, USER: own)
const getAllOrders = async (query, userId, role) => {
    const { page = 1, limit = 20 } = query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const whereConditions = {};
    if (role === "USER") {
        whereConditions.userId = userId;
    }
    const [data, total] = await Promise.all([
        prismaAny.order.findMany({
            where: whereConditions,
            skip,
            take: limitNumber,
            orderBy: { createdAt: "desc" },
            include: {
                menuItem: true,
                booking: true,
                user: { select: { id: true, name: true, email: true } },
            },
        }),
        prismaAny.order.count({ where: whereConditions }),
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
const getSingleOrder = async (id) => {
    return await prismaAny.order.findUnique({
        where: { id },
        include: {
            menuItem: true,
            booking: true,
            user: { select: { id: true, name: true, email: true } },
        },
    });
};
// DELETE
const deleteOrder = async (id) => {
    return await prismaAny.order.delete({ where: { id } });
};
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    deleteOrder,
};
