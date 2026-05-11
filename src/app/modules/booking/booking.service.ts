import { prisma } from "../../lib/prisma";

// CREATE BOOKING
const createBooking = async (userId: number, data: any) => {
  return await prisma.booking.create({
    data: {
      userId,
      packageId: data.packageId,
      date: new Date(data.date),
      guests: data.guests,
    },
  });
};

// GET USER BOOKINGS
const getUserBookings = async (userId: number) => {
  return await prisma.booking.findMany({
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
  return await prisma.booking.findMany({
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
const deleteBooking = async (id: number) => {
  return await prisma.booking.delete({
    where: { id },
  });
};

export const BookingService = {
  createBooking,
  getUserBookings,
  getAllBookings,
  deleteBooking,
};