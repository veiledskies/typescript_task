/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const scores = students.map(function(student) {
    let correct = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        if (student.answers[i] === correctAnswers[i]) {
            correct++;
        }
    }

    return {
        name: student.name,
        score: correct * 20
    };
});

console.log("Student Scores:", scores);

const passed = scores.filter(function(student) {
    return student.score > 70;
});

console.log("Students Passed:", passed);

const highest = scores.reduce(function(max, student) {
    if (student.score > max.score) {
        return student;
    }

    return max;
});

console.log("Highest Score:", highest);

const total = scores.reduce(function(sum, student) {
    return sum + student.score;
}, 0);

const average = total / scores.length;

console.log("Class Average:", average);