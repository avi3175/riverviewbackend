"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantBookingController = void 0;
const restaurantBooking_service_1 = require("./restaurantBooking.service");
const createRestaurantBooking = async (req, res) => {
    try {
        const user = req.user;
        const result = await restaurantBooking_service_1.RestaurantBookingService.createRestaurantBooking({
            ...req.body,
            userId: user.id,
        });
        res.status(201).json({
            success: true,
            message: "Restaurant booking created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
const getAllRestaurantBookings = async (req, res) => {
    try {
        const user = req.user;
        const result = await restaurantBooking_service_1.RestaurantBookingService.getAllRestaurantBookings(req.query, user.id, user.role);
        res.status(200).json({
            success: true,
            message: "Restaurant bookings fetched successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch restaurant bookings",
            error: error.message,
        });
    }
};
const getSingleRestaurantBooking = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await restaurantBooking_service_1.RestaurantBookingService.getSingleRestaurantBooking(id);
        res.status(200).json({
            success: true,
            message: "Restaurant booking fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch restaurant booking",
            error: error.message,
        });
    }
};
const deleteRestaurantBooking = async (req, res) => {
    try {
        const user = req.user;
        const id = Number(req.params.id);
        const result = await restaurantBooking_service_1.RestaurantBookingService.deleteRestaurantBooking(id, user.id, user.role);
        res.status(200).json({
            success: true,
            message: "Restaurant booking deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.RestaurantBookingController = {
    createRestaurantBooking,
    getAllRestaurantBookings,
    getSingleRestaurantBooking,
    deleteRestaurantBooking,
};
