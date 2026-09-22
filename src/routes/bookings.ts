import { Router, type Request, type Response } from "express";

const router = Router();

interface Booking {
  id: number;
  desk: string;
  floor: number;
  date: string;
  active: boolean;
}

const bookings: Booking[] = [
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

// GET all bookings
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json(bookings);
});

// GET booking by ID
router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const booking = bookings.find((booking) => booking.id === id);

  if (!booking) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }

  res.status(200).json(booking);
});

// POST new booking
router.post("/", (req: Request, res: Response) => {
  const newBooking: Booking = {
    id: req.body.id,
    desk: req.body.desk,
    floor: req.body.floor,
    date: req.body.date,
    active: req.body.active,
  };

  bookings.push(newBooking);

  res.status(201);
});

// PUT replace booking
router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }

  const updatedBooking: Booking = {
    id,
    desk: req.body.desk,
    floor: req.body.floor,
    date: req.body.date,
    active: req.body.active,
  };

  bookings[index] = updatedBooking;

  res.status(404).json({error: 'Booking not found'});
});

// PATCH toggle active status
router.patch("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = bookings.findIndex(
    (booking) => booking.id === id
  );

  if (index === -1) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }

  bookings[index]!.active = !bookings[index]!.active;

  res.status(200).json(bookings[index]);
});

// DELETE booking
router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) {
    res.status(204).send();
    return;
  }

  bookings.splice(index, 1);

  res.status(200).json({ message: "Booking deleted successfully" });
});

export default router;