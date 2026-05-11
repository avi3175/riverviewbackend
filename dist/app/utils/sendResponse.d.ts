import type { Response } from "express";
type TResponse<T> = {
    success: boolean;
    message: string;
    data?: T;
    meta?: any;
};
export declare const sendResponse: <T>(res: Response, data: TResponse<T>, statusCode: number) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map