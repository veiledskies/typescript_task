/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */


const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(): number {
    return enrollments.length;
}

function countCompletedEnrollments(): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed == true) {
            count++;
        }
    }

    return count;
}

function countIncompleteEnrollments(): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed == false) {
            count++;
        }
    }

    return count;
}

function calculateCompletionPercentage(): number {
    return (countCompletedEnrollments() / countTotalEnrollments()) * 100;
}

function getHighestScore(): number {
    let highest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score > highest) {
            highest = enrollments[i].score;
        }
    }

    return highest;
}

function getLowestScore(): number {
    let lowest = enrollments[0].score;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score < lowest) {
            lowest = enrollments[i].score;
        }
    }

    return lowest;
}

function calculateAverageScore(): number {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total = total + enrollments[i].score;
    }

    return total / countTotalEnrollments();
}

function countStudentsWithPassingScores(): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score >= 75) {
            count++;
        }
    }

    return count;
}

function countStudentsByCourse(course: string): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course == course) {
            count++;
        }
    }

    return count;
}

function calculateAverageScoreByCourse(course: string): number {
    let total = 0;
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course == course) {
            total = total + enrollments[i].score;
            count++;
        }
    }

    if (count == 0) {
        return 0;
    }

    return total / count;
}

function calculateTotalLearningHours(): number {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total = total + enrollments[i].duration;
    }

    return total;
}

function calculateAverageLearningDuration(): number {
    return calculateTotalLearningHours() / countTotalEnrollments();
}

function printCompletionStatistics(): void {
    console.log("Completion Statistics:");
    console.log("Total Enrollments: " + countTotalEnrollments());
    console.log("Completed: " + countCompletedEnrollments());
    console.log("Incomplete: " + countIncompleteEnrollments());
    console.log("Completion Percentage: " + calculateCompletionPercentage() + "%");
}

function printAcademicStatistics(): void {
    console.log("Academic Statistics:");
    console.log("Highest Score: " + getHighestScore());
    console.log("Lowest Score: " + getLowestScore());
    console.log("Average Score: " + calculateAverageScore());
    console.log("Passing Students: " + countStudentsWithPassingScores());
}

function printCourseStatistics(): void {
    console.log("Course Statistics:");
    console.log("TypeScript Students: " + countStudentsByCourse("TypeScript"));
    console.log("TypeScript Average: " + calculateAverageScoreByCourse("TypeScript"));

    console.log("Database Students: " + countStudentsByCourse("Database"));
    console.log("Database Average: " + calculateAverageScoreByCourse("Database"));

    console.log("Backend Students: " + countStudentsByCourse("Backend"));
    console.log("Backend Average: " + calculateAverageScoreByCourse("Backend"));
}

function printLearningStatistics(): void {
    console.log("Learning Statistics:");
    console.log("Total Learning Hours: " + calculateTotalLearningHours());
    console.log("Average Learning Duration: " + calculateAverageLearningDuration());
}

function printDashboard(): void {
    console.log("===== ACADEMY DASHBOARD =====");

    printCompletionStatistics();
    printAcademicStatistics();
    printCourseStatistics();
    printLearningStatistics();
}

printDashboard();