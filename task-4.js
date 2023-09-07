const books = [
  { title: "Book 1", author: "Author A", category: "Fiction" },
  { title: "Book 2", author: "Author B", category: "Non-Fiction" },
  { title: "Book 3", author: "Author A", category: "Fiction" },
  { title: "Book 4", author: "Author C", category: "Mystery" },
  { title: "Book 5", author: "Author B", category: "Fiction" },
];

const newBooksArray = books.filter(({ category }) => {
  return category === "Fiction";
});
console.log(newBooksArray);

const filterByAuthor = books.filter(({ author }) => {
  return author === "Author A";
});
filterByAuthor.forEach((book) =>
  console.log(`author ${book.author} , title ${book.title}`)
);
