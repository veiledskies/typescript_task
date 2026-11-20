/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countAdmittedPatients(): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted == true) {
            count++;
        }
    }

    return count;
}

function countDischargedPatients(): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted == false) {
            count++;
        }
    }

    return count;
}

function countPatientsByDepartment(department: string): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].department == department) {
            count++;
        }
    }

    return count;
}

function getHighestBill(): number {
    let highest = patients[0].bill;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].bill > highest) {
            highest = patients[i].bill;
        }
    }

    return highest;
}

function getLowestBill(): number {
    let lowest = patients[0].bill;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].bill < lowest) {
            lowest = patients[i].bill;
        }
    }

    return lowest;
}

function getAverageBill(): number {
    let total = 0;

    for (let i = 0; i < patients.length; i++) {
        total = total + patients[i].bill;
    }

    return total / patients.length;
}

function getTotalRevenue(): number {
    let total = 0;

    for (let i = 0; i < patients.length; i++) {
        total = total + patients[i].bill;
    }

    return total;
}

function getAdmittedPatientNames(): string[] {
    let names: string[] = [];

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted == true) {
            names.push(patients[i].name);
        }
    }

    return names;
}

function printHospitalReport(): void {
    console.log("Hospital Report:");
    console.log("Total patients: " + patients.length);
    console.log("Total admitted patients: " + countAdmittedPatients());
    console.log("Total discharged patients: " + countDischargedPatients());
    console.log("Pediatrics patients: " + countPatientsByDepartment("Pediatrics"));
    console.log("Cardiology patients: " + countPatientsByDepartment("Cardiology"));
    console.log("Orthopedics patients: " + countPatientsByDepartment("Orthopedics"));
    console.log("Highest hospital bill: " + getHighestBill());
    console.log("Lowest hospital bill: " + getLowestBill());
    console.log("Average hospital bill: " + getAverageBill());
    console.log("Total hospital revenue: " + getTotalRevenue());
    console.log("Names of admitted patients: " + getAdmittedPatientNames());
}

printHospitalReport();