import React, { Component } from "react";
import API from "../../utils/API";
import Book from "../../components/Book";

class Saved extends Component {
  state = {
    books: []
  };

  style = {
    noContent: {
      fontSize: 13,
      fontStyle: "italic"
    },
    skinnyHeader: {
      fontWeight: 300
    },
    header: {
      padding: 40,
      margin: "10px 0px",
      borderRadius: 4
    }
  };

  componentDidMount() {
    API.getBooks().then(response => {
      this.setState({ books: response.data });
    });
  }

  render(props) {
    return (
      <div style={this.style.header} className="row z-depth-1">
        {this.state.books.length ? (
          this.state.books.map((book, index) => (
            <Book
              remove={true}
              key={book.title}
              author={book.author}
              thumbnail={book.thumbnail}
              index={index + 1}
              description={book.description}
              link={book.link}
              bookTitle={book.title}
            />
          ))
        ) : (
          <h3 style={this.style.skinnyHeader}>No saved books</h3>
        )}
      </div>
    );
  }
}

export default Saved;
