export interface Booking {
  id: number;
  desk: string;
  floor: number;
  date: string;
  active: boolean;
}

export class BookingRepository {
  private bookings: Booking[] = [
    {
      id: 1,
      desk: "A01",
      floor: 1,
      date: "2026-09-22",
      active: true,
    },
    {
      id: 2,
      desk: "B05",
      floor: 2,
      date: "2026-09-23",
      active: true,
    },
    {
      id: 3,
      desk: "C10",
      floor: 3,
      date: "2026-09-24",
      active: false,
    },
  ];

  findAll(): Booking[] {
    return this.bookings;
  }

  findById(id: number): Booking | undefined {
    return this.bookings.find((booking) => booking.id === id);
  }

  create(booking: Booking): Booking {
    this.bookings.push(booking);
    return booking;
  }

  update(id: number, data: Booking): Booking | undefined {
    const index = this.bookings.findIndex(
      (booking) => booking.id === id
    );

    if (index === -1) {
      return undefined;
    }

    this.bookings[index] = data;

    return this.bookings[index];
  }

  delete(id: number): boolean {
    const index = this.bookings.findIndex(
      (booking) => booking.id === id
    );

    if (index === -1) {
      return false;
    }

    this.bookings.splice(index, 1);

    return true;
  }
}

export const bookingRepository = new BookingRepository();