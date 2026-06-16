import type { Request, Response } from "express";
import { MenuItemService } from "./menuItem.service";

const createMenuItem = async (req: Request, res: Response) => {
  try {
    const result = await MenuItemService.createMenuItem(req.body);

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create menu item",
      error: error.message,
    });
  }
};

const getAllMenuItems = async (req: Request, res: Response) => {
  try {
    const result = await MenuItemService.getAllMenuItems(req.query);

    res.status(200).json({
      success: true,
      message: "Menu items fetched successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu items",
      error: error.message,
    });
  }
};

const getSingleMenuItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await MenuItemService.getSingleMenuItem(id);

    res.status(200).json({
      success: true,
      message: "Menu item fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch menu item",
      error: error.message,
    });
  }
};

const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await MenuItemService.updateMenuItem(id, req.body);

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update menu item",
      error: error.message,
    });
  }
};

const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await MenuItemService.deleteMenuItem(id);

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete menu item",
      error: error.message,
    });
  }
};

export const MenuItemController = {
  createMenuItem,
  getAllMenuItems,
  getSingleMenuItem,
  updateMenuItem,
  deleteMenuItem,
};