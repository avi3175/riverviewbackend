"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPackageSchema = void 0;
const zod_1 = require("zod");
exports.createPackageSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    shortDesc: zod_1.z.string().min(1, "Short description is required"),
    description: zod_1.z.string().min(10, "Description must be at least 10 characters"),
    price: zod_1.z.number().positive("Price must be positive"),
    category: zod_1.z.string().min(1, "Category is required"),
    capacity: zod_1.z.number().int().positive("Capacity must be a positive integer"),
    image: zod_1.z.string().url("Image must be a valid URL"),
    isFeatured: zod_1.z.boolean().optional(),
    userId: zod_1.z.number().optional(),
});
