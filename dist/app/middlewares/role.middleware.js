"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!roles.includes(user.role)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden",
            });
        }
        next();
    };
};
exports.roleMiddleware = roleMiddleware;
