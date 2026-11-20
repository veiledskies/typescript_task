/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const averages = employees.map(function(employee) {
    let total = employee.projects.reduce(function(sum, project) {
        return sum + project.score;
    }, 0);

    let average = total / employee.projects.length;

    return {
        name: employee.name,
        averageScore: average
    };
});

console.log("Average Scores:", averages);

const above85 = averages.filter(function(employee) {
    return employee.averageScore > 85;
});

console.log("Above 85:", above85);

const below80 = employees.filter(function(employee) {
    return employee.projects.some(function(project) {
        return project.score < 80;
    });
});

console.log("Below 80:", below80);