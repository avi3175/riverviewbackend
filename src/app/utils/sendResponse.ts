import type { Response } from "express";

type TResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  meta?: any;
};

export const sendResponse = <T>(
  res: Response,
  data: TResponse<T>,
  statusCode: number
) => {
  res.status(statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    meta: data.meta,
  });
};