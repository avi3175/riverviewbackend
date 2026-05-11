import { z } from "zod";

export const createPackageSchema = z.object({
  title: z.string().min(1, "Title is required"),

  shortDesc: z.string().min(1, "Short description is required"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  price: z.number().positive("Price must be positive"),

  category: z.string().min(1, "Category is required"),

  capacity: z.number().int().positive("Capacity must be a positive integer"),

  image: z.string().url("Image must be a valid URL"),

  isFeatured: z.boolean().optional(),

  userId: z.number().optional(),
});