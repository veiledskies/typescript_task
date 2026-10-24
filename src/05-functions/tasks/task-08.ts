/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countSubmittedAssignments() {
    return submissions.filter(submission => submission.submitted).length;
}

function countMissingAssignments() {
    return submissions.filter(submission => !submission.submitted).length;
}

function countPassedStudents() {
    return submissions.filter(submission => submission.submitted && submission.score >= 75).length;
}

function countStudentsRequiringRevision() {
    return submissions.filter(submission => submission.submitted && submission.score < 75).length;
}

function getAverageScore() {
    const totalScore = submissions.reduce((sum, submission) => sum + submission.score, 0);
    return totalScore / submissions.length;
}

function getHighestScore() {
    return Math.max(...submissions.map(submission => submission.score));
}

function getLowestScore() {
    return Math.min(...submissions.map(submission => submission.score));
}

function displayReport() {
    console.log("Assignment Report");
    console.log(`Total Students: ${submissions.length}`);
    console.log(`Submitted Assignments: ${countSubmittedAssignments()}`);
    console.log(`Missing Assignments: ${countMissingAssignments()}`);
    console.log(`Passed Students: ${countPassedStudents()}`);
    console.log(`Students Requiring Revision: ${countStudentsRequiringRevision()}`);
    console.log(`Average Score: ${getAverageScore().toFixed(2)}`);
    console.log(`Highest Score: ${getHighestScore()}`);
    console.log(`Lowest Score: ${getLowestScore()}`);
}