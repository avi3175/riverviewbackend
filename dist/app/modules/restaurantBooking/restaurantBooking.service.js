"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBookingService = void 0;
const prisma_1 = require("../../lib/prisma");
// CREATE
const createRestaurantBooking = async (data) => {
    const { userId, date, time, guests, notes } = data;
    // Basic validation: date should be in the future
    const bookingDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Check for double booking (same user, same date, same time)
    const existing = await prisma_1.prisma.restaurantBooking.findFirst({
        where: {
            userId,
            date: bookingDate,
            time,
        },
    });
    if (existing) {
        throw new Error("You already have a restaurant booking at this date and time");
    }
    return await prisma_1.prisma.restaurantBooking.create({
        data: {
            userId,
            date: bookingDate,
            time,
            guests,
            notes,
        },
    });
};
// GET ALL (ADMIN/MANAGER: all, USER: own)
const getAllRestaurantBookings = async (query, userId, role) => {
    const { page = 1, limit = 20 } = query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;
    const whereConditions = {};
    if (role === "USER") {
        whereConditions.userId = userId;
    }
    const [data, total] = await Promise.all([
        prisma_1.prisma.restaurantBooking.findMany({
            where: whereConditions,
            skip,
            take: limitNumber,
            orderBy: { date: "desc" },
            include: {
                user: { select: { id: true, name: true, email: true } },
            },
        }),
        prisma_1.prisma.restaurantBooking.count({ where: whereConditions }),
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
const getSingleRestaurantBooking = async (id) => {
    return await prisma_1.prisma.restaurantBooking.findUnique({
        where: { id },
        include: {
            user: { select: { id: true, name: true, email: true } },
        },
    });
};
// DELETE (USER can cancel own, ADMIN/MANAGER can delete any)
const deleteRestaurantBooking = async (id, userId, role) => {
    const booking = await prisma_1.prisma.restaurantBooking.findUnique({
        where: { id },
    });
    if (!booking) {
        throw new Error("Restaurant booking not found");
    }
    if (role === "USER" && booking.userId !== userId) {
        throw new Error("You can only cancel your own bookings");
    }
    return await prisma_1.prisma.restaurantBooking.delete({ where: { id } });
};
exports.RestaurantBookingService = {
    createRestaurantBooking,
    getAllRestaurantBookings,
    getSingleRestaurantBooking,
    deleteRestaurantBooking,
};
