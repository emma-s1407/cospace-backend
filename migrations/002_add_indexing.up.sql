ALTER TABLE Bookings
ADD CONSTRAINT unique_booking
UNIQUE (DeskID, BookingDate);
