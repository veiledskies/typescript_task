/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */


const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(attendances: any[]): void {
    let totalPresent = 0;
    let totalAbsent = 0;
    let absentStudents = [];

    for (let i = 0; i < attendances.length; i++) {

        if (attendances[i].present == true) {
            totalPresent++;
        } else {
            totalAbsent++;
            absentStudents.push(attendances[i].name);
        }

    }

    console.log("Attendance Report");
    console.log("Total Present: " + totalPresent);
    console.log("Total Absent: " + totalAbsent);
    console.log("Absent Students: " + absentStudents);
}

printAttendanceReport(attendances);