import type { Request, Response } from "express";
import { BookingService } from "./booking.service";

// CREATE BOOKING
const createBooking = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;

    const result = await BookingService.createBooking(userId, req.body);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
};

// USER BOOKINGS
const getUserBookings = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;

    const result = await BookingService.getUserBookings(userId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};

// ADMIN ALL BOOKINGS
const getAllBookings = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.getAllBookings();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch all bookings",
      error: error.message,
    });
  }
};

// DELETE
const deleteBooking = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await BookingService.deleteBooking(id);

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete booking",
      error: error.message,
    });
  }
};

export const BookingController = {
  createBooking,
  getUserBookings,
  getAllBookings,
  deleteBooking,
};