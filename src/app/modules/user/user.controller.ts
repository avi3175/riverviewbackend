import type { Request, Response } from "express";
import { UserService } from "./user.service";

// GET MY PROFILE
const getMyProfile = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;

    const result = await UserService.getUserById(userId);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ADMIN: GET ALL USERS
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUsers();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const UserController = {
  getMyProfile,
  getAllUsers,
};