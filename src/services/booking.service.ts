import {
  Booking,
  BookingRepository,
  bookingRepository,
} from "../repositories/booking.repository";

export class BookingService {
  constructor(
    private readonly repository: BookingRepository = bookingRepository
  ) {}

  getAllBookings(): Booking[] {
    return this.repository.findAll();
  }

  getBookingById(id: number): Booking | undefined {
    return this.repository.findById(id);
  }

  createBooking(booking: Booking): Booking {
    if (booking.desk.length < 3) {
      throw new Error(
        "Desk name must be at least 3 characters long"
      );
    }

    return this.repository.create(booking);
  }

  updateBooking(
    id: number,
    booking: Booking
  ): Booking | undefined {
    return this.repository.update(id, booking);
  }

  deleteBooking(id: number): boolean {
    return this.repository.delete(id);
  }
}

export const bookingService = new BookingService();