/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];


const studentScores = submissions.map(function(submission) {
    let correct = 0;

    for (let i = 0; i < submission.answers.length; i++) {
        let question = questions.find(function(q) {
            return q.id === submission.answers[i].questionId;
        });

        if (question !== undefined) {
            if (submission.answers[i].answer === question.correctAnswer) {
                correct++;
            }
        }
    }

    return {
        student: submission.student,
        score: correct * 25
    };
});

console.log(studentScores);


const answerResults = submissions.map(function(submission) {
    let correct = 0;

    for (let i = 0; i < submission.answers.length; i++) {
        let question = questions.find(function(q) {
            return q.id === submission.answers[i].questionId;
        });

        if (question !== undefined) {
            if (submission.answers[i].answer === question.correctAnswer) {
                correct++;
            }
        }
    }

    return {
        student: submission.student,
        correct: correct,
        wrong: questions.length - correct
    };
});

console.log(answerResults);


const categories = ["TypeScript", "Array"];

for (let i = 0; i < categories.length; i++) {
    let categoryQuestions = questions.filter(function(q) {
        return q.category === categories[i];
    });

    let total = 0;

    for (let j = 0; j < submissions.length; j++) {
        for (let k = 0; k < categoryQuestions.length; k++) {
            let answer = submissions[j].answers.find(function(a) {
                return a.questionId === categoryQuestions[k].id;
            });

            if (answer !== undefined) {
                if (answer.answer === categoryQuestions[k].correctAnswer) {
                    total += 100;
                }
            }
        }
    }

    let average = total / (categoryQuestions.length * submissions.length);

    console.log(categories[i] + ": " + average.toFixed(2));
}

const scores = studentScores.map(function(student) {
    return student.score;
});

const totalScore = scores.reduce(function(total, score) {
    return total + score;
}, 0);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const passedStudents = studentScores.filter(function(student) {
    return student.score >= 75;
});

const averageScore = totalScore / studentScores.length;

const analytics = {
    totalStudents: submissions.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents.length,
    failedStudents: submissions.length - passedStudents.length,
    passRate: Number((passedStudents.length / submissions.length * 100).toFixed(2))
};

console.log(analytics);