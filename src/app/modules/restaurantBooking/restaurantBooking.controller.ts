import type { Request, Response } from "express";
import { RestaurantBookingService } from "./restaurantBooking.service";

const createRestaurantBooking = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await RestaurantBookingService.createRestaurantBooking({
      ...req.body,
      userId: user.id,
    });

    res.status(201).json({
      success: true,
      message: "Restaurant booking created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllRestaurantBookings = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await RestaurantBookingService.getAllRestaurantBookings(
      req.query,
      user.id,
      user.role
    );

    res.status(200).json({
      success: true,
      message: "Restaurant bookings fetched successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant bookings",
      error: error.message,
    });
  }
};

const getSingleRestaurantBooking = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await RestaurantBookingService.getSingleRestaurantBooking(id);

    res.status(200).json({
      success: true,
      message: "Restaurant booking fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant booking",
      error: error.message,
    });
  }
};

const deleteRestaurantBooking = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const id = Number(req.params.id);
    const result = await RestaurantBookingService.deleteRestaurantBooking(
      id,
      user.id,
      user.role
    );

    res.status(200).json({
      success: true,
      message: "Restaurant booking deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const RestaurantBookingController = {
  createRestaurantBooking,
  getAllRestaurantBookings,
  getSingleRestaurantBooking,
  deleteRestaurantBooking,
};