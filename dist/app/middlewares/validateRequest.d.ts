import type { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
export declare const validateRequest: (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validateRequest.d.ts.map