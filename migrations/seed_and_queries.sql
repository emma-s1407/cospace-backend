INSERT INTO Teams (TeamName, TeamDepartment)
VALUES ("Team 1", "Marketing");

INSERT INTO Teams (TeamName, TeamDepartment)
VALUES ("Team 2", "Finance");

INSERT INTO Teams (TeamName, TeamDepartment)
VALUES ("Team 3", "Media");

This adds three teams into the Teams table.

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Emily", "Prentiss", "eprentiss@business.com", "1");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Spencer", "Reid", "sreid@business.com", "1");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Derek", "Morgan", "dmorgan@business.com", "3");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("JJ", "Jareau", "jjareau@business.com", "2");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Aaron", "Hotchner", "ahotchner@business.com", "2");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Penelope", "Garcia", "pgarcia@business.com", "3");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("David", "Rossi", "drossi@business.com", "2");

INSERT INTO Users (FirstName, LastName, Email, TeamID)
VALUES ("Luke", "Alvez", "lalvez@business.com", "3");

This adds eight users into the Users tables, using TeamID as a foreign key.

INSERT INTO Rooms (RoomName, RoomFloor, Capacity)
VALUES ("Room 1", "1", "5");

INSERT INTO Rooms (RoomName, RoomFloor, Capacity)
VALUES ("Room 2", "2", "10");

INSERT INTO Rooms (RoomName, RoomFloor, Capacity)
VALUES ("Room 3", "2", "10");

This adds three room into the Rooms table

INSERT INTO Desks (DeskName, DeskFloor)
VALUES ("Desk 1", "1");

INSERT INTO Desks (DeskName, DeskFloor)
VALUES ("Desk 2", "1");

INSERT INTO Desks (DeskName, DeskFloor)
VALUES ("Desk 3", "2");

INSERT INTO Desks (DeskName, DeskFloor)
VALUES ("Desk 4", "2");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("1", "1", "26/09/27");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("2", "1", "27/09/27");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("2", "4", "19/11/26");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("6", "2", "07/10/26");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("3", "1", "31/12/26");

INSERT INTO Bookings (UserID, DeskID, BookingDate)
VALUES ("8", "3", "01/01/27");

SELECT
    CONCAT(u.FirstName, ' ', u.LastName) AS FullName,
    t.TeamName,
    COUNT(b.BookingID) AS TotalDesksBooked
FROM Users u
LEFT JOIN Teams t
    ON u.TeamID = t.TeamID
LEFT JOIN Bookings b
    ON u.UserID = b.UserID
GROUP BY
    u.UserID,
    u.FirstName,
    u.LastName,
    t.TeamName;

UPDATE Users
SET TeamID = "1"
WHERE UserID = 4;