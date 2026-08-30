/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const books: Book[] = [
  {
    isbn: "978-0-13-110362-7",
    title: "The C Programming Language",
    author: "Brian W. Kernighan, Dennis M. Ritchie",
    totalPages: 288,
    category: "Programming",
    isAvailable: true,
  },
  {
    isbn: "978-0-7432-7356-5",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    totalPages: 212,
    category: "Science",
    isAvailable: false,
  },
  {
    isbn: "978-0-06-112008-4",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    totalPages: 336,
    category: "Literature",
    isAvailable: true,
  },
];

console.log(books);
