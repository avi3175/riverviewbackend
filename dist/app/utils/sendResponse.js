"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data, statusCode) => {
    res.status(statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
        meta: data.meta,
    });
};
exports.sendResponse = sendResponse;
