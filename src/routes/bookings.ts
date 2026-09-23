import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";
import { auth } from "../middleware/auth";
import { validate } from "../middleware/validate";

const router = Router();

router.get(
  "/",
  auth,
  (req, res) => bookingController.getAllBookings(req, res)
);

router.get(
  "/:id",
  auth,
  (req, res) => bookingController.getBookingById(req, res)
);

router.post(
  "/",
  auth,
  validate(["desk", "floor", "date", "active"]),
  (req, res) => bookingController.createBooking(req, res)
);

router.put(
  "/:id",
  auth,
  validate(["desk", "floor", "date", "active"]),
  (req, res) => bookingController.updateBooking(req, res)
);

router.patch(
  "/:id",
  auth,
  (req, res) => bookingController.updateBooking(req, res)
);

router.delete(
  "/:id",
  auth,
  (req, res) => bookingController.deleteBooking(req, res)
);

export default router;
