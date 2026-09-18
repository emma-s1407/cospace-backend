CREATE TABLE Departments (
  DepartmentID   INT PRIMARY KEY AUTO_INCREMENT,
  DepartmentName VARCHAR(30) NOT NULL
);

CREATE TABLE Employees (
  EmployeeID     INT PRIMARY KEY AUTO_INCREMENT,
  EmployeeName          VARCHAR(50) NOT NULL,
  DepartmentID INT,
  FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

SELECT
    Employees.EmployeeID,
    Employees.EmployeeName,
    Departments.DepartmentName
FROM Employees
INNER JOIN Departments
    ON Employees.DepartmentID = Departments.DepartmentID;

SELECT
    Employees.EmployeeID,
    Employees.EmployeeName,
    Departments.DepartmentName
FROM Employees
LEFT JOIN Departments
    ON Employees.DepartmentID = Departments.DepartmentID;

SELECT
    d.DepartmentID,
    d.DepartmentName
FROM Departments d
LEFT JOIN Employees e
    ON d.DepartmentID = e.DepartmentID
WHERE e.EmployeeID IS NULL;

SELECT
    d.DepartmentID,
    d.DepartmentName,
    COUNT(e.EmployeeID) AS EmployeeCount
FROM Departments d
LEFT JOIN Employees e
    ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentID, d.DepartmentName;

UPDATE Employees
SET DepartmentID = 4
WHERE EmployeeID = 3;

DELETE FROM Employees
WHERE EmployeeID = 6;

You would use a left join when you want to see all the information on the records in the left table even if there are no matching records in the right table.