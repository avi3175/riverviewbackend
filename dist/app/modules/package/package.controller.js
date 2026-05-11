"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageController = void 0;
const package_service_1 = require("./package.service");
// CREATE
// CREATE
const createPackage = async (req, res) => {
    try {
        const user = req.user; // 🔑 from auth middleware
        const result = await package_service_1.PackageService.createPackage({
            ...req.body,
            userId: user.id, // 🔥 attach creator
        });
        res.status(201).json({
            success: true,
            message: "Package created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create package",
            error: error.message,
        });
    }
};
// GET ALL (WITH PAGINATION + FILTERS)
const getAllPackages = async (req, res) => {
    try {
        const result = await package_service_1.PackageService.getAllPackages(req.query);
        res.status(200).json({
            success: true,
            message: "Packages fetched successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch packages",
            error: error.message,
        });
    }
};
// GET SINGLE
const getSinglePackage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await package_service_1.PackageService.getSinglePackage(id);
        res.status(200).json({
            success: true,
            message: "Package fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch package",
            error: error.message,
        });
    }
};
// DELETE
const deletePackage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await package_service_1.PackageService.deletePackage(id);
        res.status(200).json({
            success: true,
            message: "Package deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete package",
            error: error.message,
        });
    }
};
// UPDATE
const updatePackage = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await package_service_1.PackageService.updatePackage(id, req.body);
        res.status(200).json({
            success: true,
            message: "Package updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update package",
            error: error.message,
        });
    }
};
const getFeaturedPackages = async (req, res) => {
    try {
        const result = await package_service_1.PackageService.getFeaturedPackages();
        res.status(200).json({
            success: true,
            message: "Featured packages fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch featured packages",
            error: error.message,
        });
    }
};
exports.PackageController = {
    createPackage,
    getAllPackages,
    getSinglePackage,
    deletePackage,
    updatePackage,
    getFeaturedPackages,
};
