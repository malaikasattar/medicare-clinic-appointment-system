-- =============================================
-- MediCare - Clinic Appointment System
-- Database Script for SQL Server Management Studio 2022
-- Run this whole file in SSMS (New Query > Execute)
-- NOTE: This script creates a NEW database MediCareDB.
-- It does NOT touch QuizManagementDB.
-- =============================================

IF DB_ID('MediCareDB') IS NULL
    CREATE DATABASE MediCareDB;
GO

USE MediCareDB;
GO

-- ---------- Specializations ----------
IF OBJECT_ID('dbo.Specializations', 'U') IS NULL
CREATE TABLE Specializations (
    SpecializationID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL UNIQUE
);
GO

-- ---------- Users (Patient / Doctor / Admin) ----------
IF OBJECT_ID('dbo.Users', 'U') IS NULL
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Password NVARCHAR(255) NOT NULL,
    Role NVARCHAR(20) NOT NULL CHECK (Role IN ('Patient','Doctor','Admin')),
    Phone NVARCHAR(20)
);
GO

-- ---------- Doctors ----------
IF OBJECT_ID('dbo.Doctors', 'U') IS NULL
CREATE TABLE Doctors (
    DoctorID INT PRIMARY KEY IDENTITY(1,1),
    UserID INT NOT NULL FOREIGN KEY REFERENCES Users(UserID),
    SpecializationID INT NOT NULL FOREIGN KEY REFERENCES Specializations(SpecializationID),
    Fee DECIMAL(10,2) NOT NULL,
    Timing NVARCHAR(100) NOT NULL,
    Qualification NVARCHAR(150)
);
GO

-- ---------- Appointments ----------
IF OBJECT_ID('dbo.Appointments', 'U') IS NULL
CREATE TABLE Appointments (
    AppointmentID INT PRIMARY KEY IDENTITY(1,1),
    PatientID INT NOT NULL FOREIGN KEY REFERENCES Users(UserID),
    DoctorID INT NOT NULL FOREIGN KEY REFERENCES Doctors(DoctorID),
    AppointmentDate DATE NOT NULL,
    AppointmentTime TIME NOT NULL,
    Status NVARCHAR(20) NOT NULL DEFAULT 'Pending'
        CHECK (Status IN ('Pending','Approved','Rejected','Completed','Cancelled')),
    Reason NVARCHAR(255),
    CONSTRAINT UQ_Doctor_Slot UNIQUE (DoctorID, AppointmentDate, AppointmentTime)
);
GO

-- ---------- Sample Data (safe to run again: only inserts if empty) ----------
IF NOT EXISTS (SELECT 1 FROM Specializations)
INSERT INTO Specializations (Name) VALUES
('Cardiologist'),
('Neurologist'),
('Nephrologist'),
('Orthopedic'),
('Ophthalmologist'),
('Dentist'),
('General Physician'),
('Pediatrician'),
('Dermatologist'),
('Gynecologist'),
('ENT Specialist'),
('Psychiatrist'),
('Gastroenterologist'),
('Urologist');
GO

-- Demo accounts (password for all: 1234)
IF NOT EXISTS (SELECT 1 FROM Users)
INSERT INTO Users (FullName, Email, Password, Role, Phone) VALUES
('Admin', 'admin@medicare.com', '1234', 'Admin', '0300-0000000'),
('Dr. Ahmed Raza', 'ahmed.raza@medicare.com', '1234', 'Doctor', '0300-2111111'),
('Dr. Sara Khan', 'sara.khan@medicare.com', '1234', 'Doctor', '0300-2222222'),
('Dr. Bilal Hussain', 'bilal.hussain@medicare.com', '1234', 'Doctor', '0300-2333333'),
('Dr. Fatima Noor', 'fatima.noor@medicare.com', '1234', 'Doctor', '0300-2444444'),
('Dr. Usman Tariq', 'usman.tariq@medicare.com', '1234', 'Doctor', '0300-2555555'),
('Dr. Ayesha Malik', 'ayesha.malik@medicare.com', '1234', 'Doctor', '0300-2666666'),
('Dr. Hassan Raza', 'hassan.raza@medicare.com', '1234', 'Doctor', '0300-2777777'),
('Dr. Maryam Shahid', 'maryam.shahid@medicare.com', '1234', 'Doctor', '0300-2888888'),
('Dr. Ali Hamza', 'ali.hamza@medicare.com', '1234', 'Doctor', '0300-2999999'),
('Dr. Zainab Fatima', 'zainab.fatima@medicare.com', '1234', 'Doctor', '0300-3111110'),
('Dr. Muhammad Omar', 'omar@medicare.com', '1234', 'Doctor', '0300-3222221'),
('Dr. Hira Shah', 'hira.shah@medicare.com', '1234', 'Doctor', '0300-3333332'),
('Dr. Kamran Akhtar', 'kamran.akhtar@medicare.com', '1234', 'Doctor', '0300-3444443'),
('Dr. Noor Ul Ain', 'noor@medicare.com', '1234', 'Doctor', '0300-3555554'),
('Dr. Saad Ahmed', 'saad.ahmed@medicare.com', '1234', 'Doctor', '0300-3666665'),
('Dr. Iqra Batool', 'iqra.batool@medicare.com', '1234', 'Doctor', '0300-3777776'),
('Dr. Faisal Mehmood', 'faisal.mehmood@medicare.com', '1234', 'Doctor', '0300-3888887'),
('Dr. Mahnoor Asif', 'mahnoor.asif@medicare.com', '1234', 'Doctor', '0300-3999998'),
('Dr. Waqas Ali', 'waqas.ali@medicare.com', '1234', 'Doctor', '0300-4111109'),
('Dr. Amna Tariq', 'amna.tariq@medicare.com', '1234', 'Doctor', '0300-4222220'),
('Dr. Shahid Mehmood', 'shahid.mehmood@medicare.com', '1234', 'Doctor', '0300-4333331'),
('Dr. Laiba Tariq', 'laiba.tariq@medicare.com', '1234', 'Doctor', '0300-4444442'),
('Dr. Hamza Qureshi', 'hamza.qureshi@medicare.com', '1234', 'Doctor', '0300-4555553'),
('Dr. Iqra Aslam', 'iqra.aslam@medicare.com', '1234', 'Doctor', '0300-4666664'),
('Dr. Talha Anwar', 'talha.anwar@medicare.com', '1234', 'Doctor', '0300-4777775'),
('Dr. Maryam Siddique', 'maryam.siddique@medicare.com', '1234', 'Doctor', '0300-4888886'),
('Dr. Imran Sheikh', 'imran.sheikh@medicare.com', '1234', 'Doctor', '0300-4999997'),
('Dr. Areeba Malik', 'areeba.malik@medicare.com', '1234', 'Doctor', '0300-5111108'),
('Ali Raza', 'ali.raza@gmail.com', '1234', 'Patient', '0321-3000000'),
('Fatima Bibi', 'fatima.bibi@gmail.com', '1234', 'Patient', '0321-3012345'),
('Ahmed Nawaz', 'ahmed.nawaz@gmail.com', '1234', 'Patient', '0321-3024690'),
('Sana Tariq', 'sana.tariq@gmail.com', '1234', 'Patient', '0321-3037035'),
('Bilal Aslam', 'bilal.aslam@gmail.com', '1234', 'Patient', '0321-3049380'),
('Hina Khalid', 'hina.khalid@gmail.com', '1234', 'Patient', '0321-3061725'),
('Usama Iqbal', 'usama.iqbal@gmail.com', '1234', 'Patient', '0321-3074070'),
('Maryam Aslam', 'maryam.aslam@gmail.com', '1234', 'Patient', '0321-3086415'),
('Hamza Ali', 'hamza.ali@gmail.com', '1234', 'Patient', '0321-3098760'),
('Areeba Khan', 'areeba.khan@gmail.com', '1234', 'Patient', '0321-3111105'),
('Shahid Anwar', 'shahid.anwar@gmail.com', '1234', 'Patient', '0321-3123450'),
('Noor Fatima', 'noor.fatima@gmail.com', '1234', 'Patient', '0321-3135795'),
('Talha Mehmood', 'talha.mehmood@gmail.com', '1234', 'Patient', '0321-3148140'),
('Iqra Shahid', 'iqra.shahid@gmail.com', '1234', 'Patient', '0321-3160485'),
('Waqar Younis', 'waqar.younis@gmail.com', '1234', 'Patient', '0321-3172830'),
('Amna Bibi', 'amna.bibi@gmail.com', '1234', 'Patient', '0321-3185175'),
('Fahad Mustafa', 'fahad.mustafa@gmail.com', '1234', 'Patient', '0321-3197520'),
('Mahnoor Fatima', 'mahnoor.fatima@gmail.com', '1234', 'Patient', '0321-3209865'),
('Danish Ali', 'danish.ali@gmail.com', '1234', 'Patient', '0321-3222210'),
('Sara Ahmed', 'patient@medicare.com', '1234', 'Patient', '0321-3234555');
GO

IF NOT EXISTS (SELECT 1 FROM Doctors)
INSERT INTO Doctors (UserID, SpecializationID, Fee, Timing, Qualification) VALUES
(2, 1, 3000, 'Monday 10:00 AM - 2:00 PM', 'MBBS, FCPS Cardiology'),
(3, 1, 3000, 'Thursday 10:00 AM - 2:00 PM', 'MBBS, FCPS Cardiology'),
(4, 2, 2800, 'Saturday 11:00 AM - 3:00 PM', 'MBBS, FCPS Neurology'),
(5, 2, 2800, 'Wednesday 11:00 AM - 3:00 PM', 'MBBS, FCPS Neurology'),
(6, 3, 2600, 'Monday 9:00 AM - 1:00 PM', 'MBBS, FCPS Nephrology'),
(7, 3, 2600, 'Sunday 9:00 AM - 1:00 PM', 'MBBS, FCPS Nephrology'),
(8, 4, 2200, 'Mon-Sat 10:00 AM - 2:00 PM', 'MBBS, MS Orthopedics'),
(9, 4, 2200, 'Mon-Sat 3:00 PM - 7:00 PM', 'MBBS, MS Orthopedics'),
(10, 5, 2000, 'Mon-Sat 9:00 AM - 1:00 PM', 'MBBS, MS Ophthalmology'),
(11, 5, 2000, 'Mon-Sat 3:00 PM - 6:00 PM', 'MBBS, MS Ophthalmology'),
(12, 6, 1500, 'Mon-Sat 9:00 AM - 1:00 PM', 'BDS, MDS'),
(13, 6, 1500, 'Mon-Sat 3:00 PM - 7:00 PM', 'BDS'),
(14, 7, 1200, 'Mon-Sat 9:00 AM - 1:00 PM', 'MBBS, FCPS'),
(15, 7, 1200, 'Mon-Sat 4:00 PM - 8:00 PM', 'MBBS'),
(16, 8, 1300, 'Mon-Sat 9:00 AM - 1:00 PM', 'MBBS, DCH'),
(17, 8, 1300, 'Mon-Sat 3:00 PM - 6:00 PM', 'MBBS, DCH'),
(18, 9, 1800, 'Mon-Fri 11:00 AM - 3:00 PM', 'MBBS, Dermatology'),
(19, 9, 1800, 'Mon-Fri 4:00 PM - 7:00 PM', 'MBBS, Dermatology'),
(20, 10, 2000, 'Tue,Thu,Sat 10:00 AM - 2:00 PM', 'MBBS, FCPS Gynecology'),
(21, 10, 2000, 'Mon,Wed,Fri 10:00 AM - 2:00 PM', 'MBBS, FCPS Gynecology'),
(22, 11, 1600, 'Mon,Wed,Fri 11:00 AM - 3:00 PM', 'MBBS, MS ENT'),
(23, 11, 1600, 'Tue,Thu,Sat 11:00 AM - 3:00 PM', 'MBBS, MS ENT'),
(24, 12, 2500, 'Monday,Thursday 4:00 PM - 7:00 PM', 'MBBS, FCPS Psychiatry'),
(25, 12, 2500, 'Tuesday,Friday 4:00 PM - 7:00 PM', 'MBBS, FCPS Psychiatry'),
(26, 13, 2400, 'Wednesday,Saturday 10:00 AM - 2:00 PM', 'MBBS, FCPS Gastroenterology'),
(27, 13, 2400, 'Monday,Thursday 10:00 AM - 2:00 PM', 'MBBS, FCPS Gastroenterology'),
(28, 14, 2300, 'Tuesday,Friday 9:00 AM - 1:00 PM', 'MBBS, MS Urology'),
(29, 14, 2300, 'Wednesday,Saturday 9:00 AM - 1:00 PM', 'MBBS, MS Urology');
GO

INSERT INTO Appointments (PatientID, DoctorID, AppointmentDate, AppointmentTime, Status, Reason) VALUES
(30, 1, '2026-11-23', '10:00:00', 'Approved', 'Chest pain checkup'),
(31, 1, '2026-11-23', '11:00:00', 'Pending', 'BP follow-up'),
(32, 2, '2026-11-26', '10:00:00', 'Pending', 'Heart checkup'),
(33, 3, '2026-11-21', '11:00:00', 'Approved', 'Headache'),
(34, 4, '2026-11-25', '12:00:00', 'Pending', 'Migraine'),
(35, 5, '2026-11-23', '09:00:00', 'Approved', 'Kidney test review'),
(36, 6, '2026-11-22', '10:00:00', 'Pending', 'Dialysis consultation'),
(37, 9, '2026-11-21', '09:00:00', 'Approved', 'Eye checkup'),
(38, 10, '2026-11-21', '15:00:00', 'Pending', 'Vision test'),
(39, 11, '2026-11-21', '10:00:00', 'Approved', 'Tooth pain'),
(40, 13, '2026-11-21', '09:00:00', 'Completed', 'Fever'),
(41, 15, '2026-11-21', '09:00:00', 'Pending', 'Child vaccination'),
(42, 7, '2026-11-21', '10:00:00', 'Pending', 'Knee pain'),
(43, 17, '2026-11-21', '11:00:00', 'Approved', 'Skin allergy'),
(44, 25, '2026-11-21', '10:00:00', 'Pending', 'Stomach pain');
GO

-- Quick check
SELECT * FROM Users;
SELECT * FROM Doctors;
SELECT * FROM Appointments;
GO
