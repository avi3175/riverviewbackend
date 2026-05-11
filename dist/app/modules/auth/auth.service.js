"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = require("../../lib/prisma");
const bcrypt_1 = require("../../utils/bcrypt");
const jwt_1 = require("../../utils/jwt");
// REGISTER
const register = async (payload) => {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashed = await (0, bcrypt_1.hashPassword)(payload.password);
    const user = await prisma_1.prisma.user.create({
        data: {
            email: payload.email,
            password: hashed,
            name: payload.name,
        },
    });
    const token = (0, jwt_1.createToken)({
        id: user.id,
        email: user.email,
        role: user.role,
    });
    return { user, token };
};
// LOGIN
const login = async (payload) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await (0, bcrypt_1.comparePassword)(payload.password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const token = (0, jwt_1.createToken)({
        id: user.id,
        email: user.email,
        role: user.role,
    });
    return { user, token };
};
exports.AuthService = {
    register,
    login,
};
