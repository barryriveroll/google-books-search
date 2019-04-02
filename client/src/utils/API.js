import axios from "axios";
const apiKey = "AIzaSyCh5aLwtC_a81dcSNwDBtcm0QA50KYlFos";

export default {
  // Search for books
  searchBooks: function(bookSearch, authorSearch) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}+inauthor:${authorSearch}&key=${apiKey}`
    );
  },
  // Get saved books
  getBooks: function() {
    return axios.get("/api/books/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
