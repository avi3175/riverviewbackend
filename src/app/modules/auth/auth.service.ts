import { prisma } from "../../lib/prisma";
import { hashPassword, comparePassword } from "../../utils/bcrypt";
import { createToken } from "../../utils/jwt";

// REGISTER
const register = async (payload: any) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashed = await hashPassword(payload.password);

  const user = await prisma.user.create({
    data: {
      email: payload.email,
      password: hashed,
      name: payload.name,
    },
  });

  const token = createToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return { user, token };
};

// LOGIN
const login = async (payload: any) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(
    payload.password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = createToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return { user, token };
};

export const AuthService = {
  register,
  login,
};