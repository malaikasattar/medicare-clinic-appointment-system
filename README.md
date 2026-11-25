# MediCare — Clinic Appointment System

Professional Clinic Appointment System

## Project kis me hai
- **Code:** Visual Studio Code
- **Database:** SQL Server Management Studio 2022 (SSMS)
- **Database name:** MediCareDB
- **Purani database safe hai:** QuizManagementDB ko ye project touch nahi karta.

## Database kese banani hai (SSMS 2022)
1. SSMS kholo aur Connect karo.
2. **New Query** dabao.
3. `MediCareDB.sql` file ka poora code copy karke paste karo.
4. **Execute** dabao.
5. Left side Databases me **MediCareDB** ban jayegi, us ke andar 4 tables hongi:
   - Users (Patient / Doctor / Admin)
   - Specializations
   - Doctors
   - Appointments

## Demo accounts (password sab ka: 1234)
- Admin: admin@medicare.com
- Patient: patient@medicare.com
- Doctor (example): ahmed.raza@medicare.com (Dr. Ahmed Raza, Cardiologist, Monday)
- Doctor (example): sara.khan@medicare.com (Dr. Sara Khan, Cardiologist, Thursday)
- Doctor (example): bilal.hussain@medicare.com (Dr. Bilal Hussain, Neurologist, Saturday)
- Doctor (example): fatima.noor@medicare.com (Dr. Fatima Noor, Neurologist, Wednesday)
- Baaki sab doctors ka email bhi un ke naam se hai (jaise ali.hamza@medicare.com, kamran.akhtar@medicare.com), password 1234. Poori list MediCareDB.sql ke Users data me hai.

## Features
- Doctor search by name and specialization
- Patient register / login
- Appointment booking (same doctor + same date + same time dobara book nahi hoga)
- My Appointments with status: Pending / Approved / Rejected / Completed / Cancelled
- Doctor dashboard: appointments Approve / Reject / Completed
- Admin dashboard: total doctors, total appointments, pending, approved, add new doctor, all appointments report

## Website kese kholni hai (VS Code)
1. VS Code me **File > Open Folder** se `medicare-project` folder kholo.
2. `index.html` pe right click > **Open with Live Server** (agar Live Server extension hai), warna file pe double click karke browser me khol lo.
3. Pages: `index.html` (Home + Doctors), `login.html`, `register.html`, `book-appointment.html`, `my-appointments.html`, `doctor-dashboard.html`, `admin-dashboard.html`.

**Note (viva me sach batana):** Website ke pages browser me demo data (localStorage) se chalte hain, aur SSMS wali `MediCareDB` database `MediCareDB.sql` script se banti hai — dono me wohi 4 tables aur wohi doctors hain. Pages seedha SQL Server se connect nahi hote; database wala hissa SSMS me alag se dikhana hai.

## Viva ke liye yaad rakho
- Users table me Role se pata chalta hai Patient hai, Doctor hai ya Admin.
- Doctors table Users se UserID ke through link hai (Foreign Key).
- Appointments me PatientID aur DoctorID dono Foreign Keys hain.
- Ek doctor ki ek date/time pe sirf ek appointment ho sakti hai — database me UNIQUE constraint laga hai.
