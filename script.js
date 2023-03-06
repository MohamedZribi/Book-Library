let myLibrary = [];

function Book(title, author, pages, cover, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.cover = cover;
  this.read = read;
}

function addBookToLibrary() {
  // This will be changed to an input form
  bookTitle = prompt("What is the title of your book?");
  bookAuthor = prompt("What is the author of this book?");
  bookPages = prompt("How many pages are in this book?");
  bookCover = prompt("Add a url for an image cover");
  bookread = prompt("Did you read this book or no?");

  let i = new Book(bookTitle, bookAuthor, bookPages, bookread);
  let book = document.createElement("div");
  book.classList.add("book");
  booksContainer.appendChild(book);

  img = document.createElement("img");
  img.classList.add("cover-image");
  book.appendChild(img);
  img.src = bookCover;
  console.log(bookCover);

  title = document.createElement("p");
  book.appendChild(title);
  title.innerHTML = bookTitle;

  readScroller = document.createElement("div"); // Styling missing
  readScroller.classList.add("read-status");
  book.appendChild(readScroller);
}

let theHobbit = new Book(
  "The Hobbit",
  "JK Rowling",
  "544",
  "https://bookstr.com/wp-content/uploads/2019/12/Image-via-Amazon-1.jpg",
  "Not yet"
);
myLibrary.push(theHobbit);

let harryPotter = new Book(
  "Harry Potter",
  "some author",
  "784",
  "https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg",
  "Yes read"
);
myLibrary.push(harryPotter);

let theBigLebowski = new Book(
  "The Big lebowski",
  "another author",
  "877",
  "https://m.media-amazon.com/images/I/71UbLUFNHXL._AC_SY445_.jpg",
  "Yes read"
);
myLibrary.push(theBigLebowski);

let theBigLebdowski = new Book(
  "The Big lebowski",
  "another author",
  "877",
  "https://m.media-amazon.com/images/I/71UbLUFNHXL._AC_SY445_.jpg",
  "Yes read"
);
myLibrary.push(theBigLebdowski);

const booksContainer = document.getElementById("books-container");
for (const i of myLibrary) {
  let book = document.createElement("div");
  book.classList.add("book");
  booksContainer.appendChild(book);

  img = document.createElement("img");
  img.classList.add("cover-image");
  book.appendChild(img);
  img.src = i.cover;

  title = document.createElement("p");
  book.appendChild(title);
  title.innerHTML = i.title;

  readScroller = document.createElement("div"); // Styling missing
  readScroller.classList.add("read-status");
  book.appendChild(readScroller);
}

// The ADD a book button
const addBook = document.querySelector(".add-book");
addBook.addEventListener("click", (e) => {
  addBookToLibrary();
});
