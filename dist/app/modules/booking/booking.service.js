"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const prisma_1 = require("../../lib/prisma");
// CREATE BOOKING
const createBooking = async (userId, data) => {
    return await prisma_1.prisma.booking.create({
        data: {
            userId,
            packageId: data.packageId,
            date: new Date(data.date),
            guests: data.guests,
        },
    });
};
// GET USER BOOKINGS
const getUserBookings = async (userId) => {
    return await prisma_1.prisma.booking.findMany({
        where: { userId },
        include: {
            package: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
// GET ALL BOOKINGS (ADMIN)
const getAllBookings = async () => {
    return await prisma_1.prisma.booking.findMany({
        include: {
            user: true,
            package: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
// DELETE BOOKING (ADMIN OR USER)
const deleteBooking = async (id) => {
    return await prisma_1.prisma.booking.delete({
        where: { id },
    });
};
exports.BookingService = {
    createBooking,
    getUserBookings,
    getAllBookings,
    deleteBooking,
};
