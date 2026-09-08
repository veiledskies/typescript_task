/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type AttendanceRecord = {
    employeeId: number;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
};

const attendanceData: AttendanceRecord[] = [
    {
        employeeId: 1,
        employeeName: "Jane Parker",
        date: "2026-06-01",
        checkInTime: "09:00",
        checkOutTime: "17:00",
        totalWorkingHours: 8,
        isPresent: true,
    },
    {
        employeeId: 2,
        employeeName: "Alice Smith",
        date: "2026-06-01",
        checkInTime: "08:30",
        checkOutTime: "16:30",
        totalWorkingHours: 8,
        isPresent: true,
    },
    {
        employeeId: 3,
        employeeName: "Naufal Rahman",
        date: "2026-06-01",
        checkInTime: "10:00",
        checkOutTime: "18:00",
        totalWorkingHours: 8,
        isPresent: true,
    }
];

attendanceData.forEach(record => {
    console.log("Employee ID: " + record.employeeId);
    console.log("Employee Name: " + record.employeeName);
    console.log("Date: " + record.date);
    console.log("Check-in Time: " + record.checkInTime);
    console.log("Check-out Time: " + record.checkOutTime);
    console.log("Total Working Hours: " + record.totalWorkingHours);
    console.log("Is Present: " + record.isPresent);
    console.log("---");
});