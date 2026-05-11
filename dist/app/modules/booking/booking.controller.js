"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const booking_service_1 = require("./booking.service");
// CREATE BOOKING
const createBooking = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await booking_service_1.BookingService.createBooking(userId, req.body);
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
            error: error.message,
        });
    }
};
// USER BOOKINGS
const getUserBookings = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await booking_service_1.BookingService.getUserBookings(userId);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
            error: error.message,
        });
    }
};
// ADMIN ALL BOOKINGS
const getAllBookings = async (req, res) => {
    try {
        const result = await booking_service_1.BookingService.getAllBookings();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch all bookings",
            error: error.message,
        });
    }
};
// DELETE
const deleteBooking = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await booking_service_1.BookingService.deleteBooking(id);
        res.status(200).json({
            success: true,
            message: "Booking deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete booking",
            error: error.message,
        });
    }
};
exports.BookingController = {
    createBooking,
    getUserBookings,
    getAllBookings,
    deleteBooking,
};
