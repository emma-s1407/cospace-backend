import { Router } from "express";
import { bookingController } from "../controllers/booking.controller";

const router = Router();

router.get("/", (req, res) =>
  bookingController.getAllBookings(req, res)
);

router.get("/:id", (req, res) =>
  bookingController.getBookingById(req, res)
);

router.post("/", (req, res) =>
  bookingController.createBooking(req, res)
);

router.put("/:id", (req, res) =>
  bookingController.updateBooking(req, res)
);

router.patch("/:id", (req, res) =>
  bookingController.updateBooking(req, res)
);

router.delete("/:id", (req, res) =>
  bookingController.deleteBooking(req, res)
);

export default router;
