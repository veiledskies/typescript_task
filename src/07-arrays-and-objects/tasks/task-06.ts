/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings = borrowings.filter(function(borrowing) {
    return borrowing.student === "Andi";
});

console.log("Andi's Borrowings:", andiBorrowings);

const borrowedBooks = borrowings.map(function(borrowing) {
    return books.find(function(book) {
        return book.id === borrowing.bookId;
    });
}).filter(function(book) {
    return book !== undefined;
});

console.log("Borrowed Book Information:", borrowedBooks);

const programmingStudents = borrowings.filter(function(borrowing) {
    let book = books.find(function(book) {
        return book.id === borrowing.bookId;
    });

    return book !== undefined && book.category === "Programming";
}).map(function(borrowing) {
    return borrowing.student;
});

console.log("Programming Book Borrowers:", programmingStudents);

const totalBorrowings = borrowings.reduce(function(total, borrowing) {
    return total + 1;
}, 0);

console.log("Total Borrowing Transactions:", totalBorrowings);

const totalDays = borrowings.reduce(function(total, borrowing) {
    return total + borrowing.days;
}, 0);

const averageDays = totalDays / borrowings.length;

console.log("Average Borrowing Duration:", averageDays);

const longBorrowings = borrowings.filter(function(borrowing) {
    return borrowing.days > 7;
});

console.log("Borrowings More Than 7 Days:", longBorrowings);