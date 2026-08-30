/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
const student1: { studentID: string; fullName: string; age: number; isActive: boolean } = {
  studentID: "ST2026045",
  fullName: "Naufal A. R. M.",
  age: 16,
  isActive: true,
};

const student2: { studentID: string; fullName: string; age: number; isActive: boolean } = {
  studentID: "ST2026046",
  fullName: "Dimas Febri A.",
  age: 15,
  isActive: true,
};

const student3: { studentID: string; fullName: string; age: number; isActive: boolean } = {
  studentID: "ST2026047",
  fullName: "Azura Junaidi",
  age: 14,
  isActive: false,
};

console.log(student1);
console.log(student2);
console.log(student3);