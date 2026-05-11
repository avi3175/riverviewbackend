import type { Request, Response } from "express";
export declare const PackageController: {
    createPackage: (req: Request, res: Response) => Promise<void>;
    getAllPackages: (req: Request, res: Response) => Promise<void>;
    getSinglePackage: (req: Request, res: Response) => Promise<void>;
    deletePackage: (req: Request, res: Response) => Promise<void>;
    updatePackage: (req: Request, res: Response) => Promise<void>;
    getFeaturedPackages: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=package.controller.d.ts.map