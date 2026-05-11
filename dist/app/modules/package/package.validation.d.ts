import { z } from "zod";
export declare const createPackageSchema: z.ZodObject<{
    title: z.ZodString;
    shortDesc: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
    capacity: z.ZodNumber;
    image: z.ZodString;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    userId: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
//# sourceMappingURL=package.validation.d.ts.map