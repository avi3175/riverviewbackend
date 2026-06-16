import type { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await OrderService.createOrder({
      ...req.body,
      userId: user.id,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user;
    const result = await OrderService.getAllOrders(req.query, user.id, user.role);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await OrderService.getSingleOrder(id);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
      error: error.message,
    });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await OrderService.deleteOrder(id);

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete order",
      error: error.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  deleteOrder,
};