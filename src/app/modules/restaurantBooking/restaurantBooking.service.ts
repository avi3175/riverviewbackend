import { prisma } from "../../lib/prisma";

// CREATE
const createRestaurantBooking = async (data: any) => {
  const { userId, date, time, guests, notes } = data;

  // Basic validation: date should be in the future
  const bookingDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check for double booking (same user, same date, same time)
  const existing = await prisma.restaurantBooking.findFirst({
    where: {
      userId,
      date: bookingDate,
      time,
    },
  });

  if (existing) {
    throw new Error("You already have a restaurant booking at this date and time");
  }

  return await prisma.restaurantBooking.create({
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
const getAllRestaurantBookings = async (query: any, userId: number, role: string) => {
  const { page = 1, limit = 20 } = query;
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const skip = (pageNumber - 1) * limitNumber;

  const whereConditions: any = {};
  if (role === "USER") {
    whereConditions.userId = userId;
  }

  const [data, total] = await Promise.all([
    prisma.restaurantBooking.findMany({
      where: whereConditions,
      skip,
      take: limitNumber,
      orderBy: { date: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
      },
    }),
    prisma.restaurantBooking.count({ where: whereConditions }),
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
const getSingleRestaurantBooking = async (id: number) => {
  return await prisma.restaurantBooking.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });
};

// DELETE (USER can cancel own, ADMIN/MANAGER can delete any)
const deleteRestaurantBooking = async (id: number, userId: number, role: string) => {
  const booking = await prisma.restaurantBooking.findUnique({
    where: { id },
  });

  if (!booking) {
    throw new Error("Restaurant booking not found");
  }

  if (role === "USER" && booking.userId !== userId) {
    throw new Error("You can only cancel your own bookings");
  }

  return await prisma.restaurantBooking.delete({ where: { id } });
};

export const RestaurantBookingService = {
  createRestaurantBooking,
  getAllRestaurantBookings,
  getSingleRestaurantBooking,
  deleteRestaurantBooking,
};