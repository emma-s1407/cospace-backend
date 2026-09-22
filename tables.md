CREATE TABLE Users (
UserID INT PRIMARY KEY,
UserName VARCHAR(50) NOT NULL,
UserEmail VARCHAR(50) NOT NULL,
Age INT,
IsActive BOOLEAN DEFAULT TRUE
);

(Field) - (Type) - (Null) - (Key) - (Default) - (Extra)
UserID - INT - NO - PRI - NULL - auto_increment
UserName - varchar(50) - NO - (N/A) - NULL - (N/A)
UserEmail - varchar(50) - NO - (N/A) - NULL - (N/A)
Age - int - YES - (N/A) - NULL - (N/A)
IsActive - tinyinit(1) - YES - (N/A) - 1 - (N/A)

MySQL error (1364): Field 'UserEmail' doesn't have a default value
It guarantees that invalid data can't be stored no matter what application the user is in.