import { z } from "zod";

export const createBookingSchema = z.object({
  desk: z
    .string()
    .trim()
    .min(3, "Desk must be at least 3 characters long")
    .max(100, "Desk cannot exceed 100 characters"),

  floor: z
    .string()
    .trim()
    .min(5, "Floor must be at least 5 characters long")
    .max(200, "Floor cannot exceed 200 characters"),

  date: z.string().datetime(),

  active: z.boolean().optional().default(true),
});

export type CreateBooking = z.infer<typeof createBookingSchema>;