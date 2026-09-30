import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST ?? "localhost",
  port: Number(process.env.DATABASE_PORT ?? 3306),
  user: requireEnv("DATABASE_USER"),
  password: requireEnv("DATABASE_PASSWORD"),
  database: requireEnv("DATABASE_NAME"),
  connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });
