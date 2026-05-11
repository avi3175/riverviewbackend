"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
// GET MY PROFILE
const getMyProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await user_service_1.UserService.getUserById(userId);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// ADMIN: GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const result = await user_service_1.UserService.getAllUsers();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.UserController = {
    getMyProfile,
    getAllUsers,
};
