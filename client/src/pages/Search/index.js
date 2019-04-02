import React, { Component, Fragment } from "react";
import Book from "../../components/Book";
import API from "../../utils/API";

const styles = {
  header: {
    padding: 40,
    margin: "10px 0px",
    borderRadius: 4
  },
  skinnyHeader: {
    fontWeight: 300
  }
};

class Search extends Component {
  state = {
    bookSearch: "",
    authorSearch: "",
    bookResults: []
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  searchBooks = () => {
    API.searchBooks(this.state.bookSearch, this.state.authorSearch)
      .then(res => {
        console.log(res.data.items);
        this.setState({ bookResults: res.data.items });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <div style={styles.header} className="row center z-depth-1">
          <h3 style={styles.skinnyHeader}>Search For Books</h3>
          <form>
            <div className="input-field col s6">
              <input
                onChange={this.handleInputChange}
                value={this.state.bookSearch}
                id="bookSearch"
                type="text"
                className="validate"
              />
              <label htmlFor="bookSearch">Book title</label>
            </div>
            <div className="input-field col s6">
              <input
                onChange={this.handleInputChange}
                value={this.state.authorSearch}
                id="authorSearch"
                type="text"
                className="validate"
              />
              <label htmlFor="authorSearch">Author name</label>
            </div>
            <a
              onClick={this.searchBooks}
              className="waves-effect waves-light btn"
            >
              <i className="material-icons left">search</i>Search
            </a>
          </form>
        </div>
        <div style={styles.header} className="row z-depth-1">
          {this.state.bookResults.length ? (
            this.state.bookResults.map((book, index) => (
              <Book
                key={book.id}
                author={book.volumeInfo.authors}
                thumbnail={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : ""
                }
                index={index + 1}
                description={book.volumeInfo.description}
                link={book.volumeInfo.previewLink}
                bookTitle={book.volumeInfo.title}
              />
            ))
          ) : (
            <h3 style={styles.skinnyHeader} className="center">
              No books to display
            </h3>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Search;
