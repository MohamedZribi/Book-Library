let myLibrary = [];

function Book(title, author, pages, cover, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.cover = cover;
  this.read = read;
}

function addBookToLibrary() {
  bookTitle = prompt("What is the title of your book?"); // This should be switched to user input
  bookAuthor = prompt("What is the author of this book?");
  bookPages = prompt("How many pages are in this book?");
  bookCover = prompt("Add a url for an image cover");
  bookread = prompt("Did you read this book or no?");

  let book = new Book(bookTitle, bookAuthor, bookPages, bookread);

  myLibrary.push(book);
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

for (let i of myLibrary) {
  console.log(i);
}
