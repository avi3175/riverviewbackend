import type { Request, Response } from "express";
import { ServiceService } from "./service.service";

const createService = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.createService(req.body);

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create service",
      error: error.message,
    });
  }
};

const getAllServices = async (req: Request, res: Response) => {
  try {
    const result = await ServiceService.getAllServices(req.query);

    res.status(200).json({
      success: true,
      message: "Services fetched successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
      error: error.message,
    });
  }
};

const getSingleService = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await ServiceService.getSingleService(id);

    res.status(200).json({
      success: true,
      message: "Service fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
      error: error.message,
    });
  }
};

const updateService = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await ServiceService.updateService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update service",
      error: error.message,
    });
  }
};

const deleteService = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await ServiceService.deleteService(id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete service",
      error: error.message,
    });
  }
};

export const ServiceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};