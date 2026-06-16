"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
const createService = async (req, res) => {
    try {
        const result = await service_service_1.ServiceService.createService(req.body);
        res.status(201).json({
            success: true,
            message: "Service created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create service",
            error: error.message,
        });
    }
};
const getAllServices = async (req, res) => {
    try {
        const result = await service_service_1.ServiceService.getAllServices(req.query);
        res.status(200).json({
            success: true,
            message: "Services fetched successfully",
            data: result.data,
            meta: result.meta,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch services",
            error: error.message,
        });
    }
};
const getSingleService = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await service_service_1.ServiceService.getSingleService(id);
        res.status(200).json({
            success: true,
            message: "Service fetched successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch service",
            error: error.message,
        });
    }
};
const updateService = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await service_service_1.ServiceService.updateService(id, req.body);
        res.status(200).json({
            success: true,
            message: "Service updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update service",
            error: error.message,
        });
    }
};
const deleteService = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await service_service_1.ServiceService.deleteService(id);
        res.status(200).json({
            success: true,
            message: "Service deleted successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete service",
            error: error.message,
        });
    }
};
exports.ServiceController = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
};
