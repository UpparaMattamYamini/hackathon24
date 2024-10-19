CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    rating DECIMAL(3, 2),
    researchProjects TEXT,
    patents TEXT,
    academicBackground TEXT
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    teacherIds TEXT
);

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    teacherId INT,
    studentId INT,
    feedback TEXT
);


