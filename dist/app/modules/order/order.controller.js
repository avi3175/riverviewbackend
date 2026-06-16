"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = async (req, res) => {
    try {
        const user = req.user;
        const result = await order_service_1.OrderService.createOrder({
            ...req.body,
            userId: user.id,
        });
        res.status(201).json({
            success: true,
            message: "Order created successfully",
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
const getAllOrders = async (req, res) => {
    try {
        const user = req.user;
        const result = await order_service_1.OrderService.getAllOrders(req.query, user.id, user.role);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message,
        });
    }
};
const getSingleOrder = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await order_service_1.OrderService.getSingleOrder(id);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch order",
            error: error.message,
        });
    }
};
const deleteOrder = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await order_service_1.OrderService.deleteOrder(id);
        res.status(200).json({
            success: true,
            message: "Order deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete order",
            error: error.message,
        });
    }
};
exports.OrderController = {
    createOrder,
    getAllOrders,
    getSingleOrder,
    deleteOrder,
};
