import { type Request, type Response } from "express";
import {
  BookingService,
  bookingService,
} from "../services/booking.service";

export class BookingController {
  constructor(
    private readonly service: BookingService = bookingService
  ) {}

  getAllBookings = (_req: Request, res: Response): void => {
    const bookings = this.service.getAllBookings();

    res.status(200).json(bookings);
  };

  getBookingById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const booking = this.service.getBookingById(id);

    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    res.status(200).json(booking);
  };

  createBooking = (req: Request, res: Response): void => {
    try {
      const booking = this.service.createBooking(req.body);

      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }

      res.status(500).json({ message: "Internal server error" });
    }
  };

  updateBooking = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const booking = this.service.updateBooking(id, req.body);

    if (!booking) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    res.status(200).json(booking);
  };

  deleteBooking = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    const deleted = this.service.deleteBooking(id);

    if (!deleted) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    res.status(200).json({
      message: "Booking deleted successfully",
    });
  };
}

export const bookingController = new BookingController();