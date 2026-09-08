/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student = {
    studentId: string;
    fullName: string;
    gradeLevel: string;
};
type Course = {
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
};

type Registration = {
    student: Student;
    course: Course;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registrations: Registration[] = [
    {
        student: {
            studentId: "S001",
            fullName: "Febrianto Pratama",
            gradeLevel: "10th Grade",
        },
        course: {
            courseId: "C001",
            courseTitle: "Introduction to TypeScript",
            instructorName: "John Doe",
            totalLearningHours: 24
        },
        registrationDate: "2026-10-01",
        isPaymentCompleted: true
    },
    {
        student: {
            studentId: "S002",
            fullName: "Naufal Rahman",
            gradeLevel: "11th Grade",
        },
        course: {
            courseId: "C002",
            courseTitle: "Advanced JavaScript",
            instructorName: "Jane Doe",
            totalLearningHours: 30
        },
        registrationDate: "2026-10-02",
        isPaymentCompleted: false
    },
    {
        student: {
            studentId: "S003",
            fullName: "Wahyu Santoso",
            gradeLevel: "12th Grade",
        },
        course: {
            courseId: "C003",
            courseTitle: "React Development",
            instructorName: "Jonas Smith",
            totalLearningHours: 40
        },
        registrationDate: "2026-10-03",
        isPaymentCompleted: true
    }
];

registrations.forEach(registration => {
    console.log("Student ID: " + registration.student.studentId);
    console.log("Full Name: " + registration.student.fullName);
    console.log("Grade Level: " + registration.student.gradeLevel);
    console.log("Course ID: " + registration.course.courseId);
    console.log("Course Title: " + registration.course.courseTitle);
    console.log("Instructor Name: " + registration.course.instructorName);
    console.log("Total Learning Hours: " + registration.course.totalLearningHours);
    console.log("Registration Date: " + registration.registrationDate);
    console.log("Is Payment Completed: " + registration.isPaymentCompleted);
});