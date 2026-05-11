import type { Request, Response } from "express";
import { PackageService } from "./package.service";

// CREATE
// CREATE
const createPackage = async (req: Request, res: Response) => {
  try {
    const user = (req as any).user; // 🔑 from auth middleware

    const result = await PackageService.createPackage({
      ...req.body,
      userId: user.id, // 🔥 attach creator
    });

    res.status(201).json({
      success: true,
      message: "Package created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create package",
      error: error.message,
    });
  }
};

// GET ALL (WITH PAGINATION + FILTERS)
const getAllPackages = async (req: Request, res: Response) => {
  try {
    const result = await PackageService.getAllPackages(req.query);

    res.status(200).json({
      success: true,
      message: "Packages fetched successfully",
      data: result.data,
      meta: result.meta,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch packages",
      error: error.message,
    });
  }
};

// GET SINGLE
const getSinglePackage = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await PackageService.getSinglePackage(id);

    res.status(200).json({
      success: true,
      message: "Package fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch package",
      error: error.message,
    });
  }
};

// DELETE
const deletePackage = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await PackageService.deletePackage(id);

    res.status(200).json({
      success: true,
      message: "Package deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete package",
      error: error.message,
    });
  }
};

// UPDATE
const updatePackage = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const result = await PackageService.updatePackage(id, req.body);

    res.status(200).json({
      success: true,
      message: "Package updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update package",
      error: error.message,
    });
  }
};












const getFeaturedPackages = async (req: Request, res: Response) => {
  try {
    const result = await PackageService.getFeaturedPackages();

    res.status(200).json({
      success: true,
      message: "Featured packages fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch featured packages",
      error: error.message,
    });
  }
};















export const PackageController = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  deletePackage,
  updatePackage,
  getFeaturedPackages,
};