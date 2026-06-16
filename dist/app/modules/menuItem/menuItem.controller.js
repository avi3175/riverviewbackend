"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemController = void 0;
const menuItem_service_1 = require("./menuItem.service");
const createMenuItem = async (req, res) => {
    try {
        const result = await menuItem_service_1.MenuItemService.createMenuItem(req.body);
        res.status(201).json({
            success: true,
            message: "Menu item created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create menu item",
            error: error.message,
        });
    }
};
const getAllMenuItems = async (req, res) => {
    try {
        const result = await menuItem_service_1.MenuItemService.getAllMenuItems(req.query);
        res.status(200).json({
            success: true,
            message: "Menu items fetched successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch menu items",
            error: error.message,
        });
    }
};
const getSingleMenuItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await menuItem_service_1.MenuItemService.getSingleMenuItem(id);
        res.status(200).json({
            success: true,
            message: "Menu item fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch menu item",
            error: error.message,
        });
    }
};
const updateMenuItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await menuItem_service_1.MenuItemService.updateMenuItem(id, req.body);
        res.status(200).json({
            success: true,
            message: "Menu item updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update menu item",
            error: error.message,
        });
    }
};
const deleteMenuItem = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await menuItem_service_1.MenuItemService.deleteMenuItem(id);
        res.status(200).json({
            success: true,
            message: "Menu item deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete menu item",
            error: error.message,
        });
    }
};
exports.MenuItemController = {
    createMenuItem,
    getAllMenuItems,
    getSingleMenuItem,
    updateMenuItem,
    deleteMenuItem,
};
