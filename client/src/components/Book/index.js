import React from "react";
import API from "../../utils/API";

function Book(props) {
  const styles = {
    divOverflow: {
      overflow: "auto",
      borderRadius: 4,
      padding: 10,
      marginBottom: 14
    },
    noContent: {
      fontSize: 13,
      fontStyle: "italic"
    },
    bookImg: {
      float: "left",
      padding: 14
    },
    bookAuthor: {
      width: "66%",
      textAlign: "left",
      marginTop: 0,
      fontSize: 22
    },
    bookTitle: {
      float: "left",
      width: "66%",
      marginTop: 2
    },
    bookLinks: {
      float: "right"
    }
  };

  return (
    <div className="z-depth-3" style={styles.divOverflow}>
      <div style={{ overflow: "auto" }}>
        <h4 style={styles.bookTitle}>
          {props.index}. {props.bookTitle}
        </h4>
        <div style={styles.bookLinks}>
          <a
            href={props.link}
            target="_blank"
            className="waves-effect waves-light btn"
          >
            View on Google Books
          </a>
          {!props.remove ? (
            <a
              onClick={() => saveBook(props)}
              style={{ marginLeft: 5 }}
              className="waves-effect waves-light btn"
            >
              Save
            </a>
          ) : (
            <a
              onClick={() => removeBook(props)}
              style={{ marginLeft: 5 }}
              className="waves-effect waves-light btn"
            >
              Remove
            </a>
          )}
        </div>
        <h5 style={styles.bookAuthor}>{props.author}</h5>
      </div>
      {props.thumbnail ? (
        <img
          style={styles.bookImg}
          src={props.thumbnail}
          alt={props.bookTitle + " thumbnail"}
        />
      ) : (
        <h5 style={styles.noContent}>No thumbnail available</h5>
      )}

      {props.description ? (
        <p>{props.description}</p>
      ) : (
        <h5 style={styles.noContent}>No description available</h5>
      )}
    </div>
  );
}

function saveBook(book) {
  const bookData = {
    title: book.bookTitle,
    author: book.author[0],
    description: book.description,
    thumbnail: book.thumbnail,
    link: book.link
  };
  API.saveBook(bookData);
}

function removeBook(book) {
  API.deleteBook(book.id);
}
export default Book;
