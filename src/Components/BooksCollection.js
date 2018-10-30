import React from 'react'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  shelves = [
    { title: "Currently Reading", shelf: "currentlyReading" },
    { title: "Want to Read", shelf: "wantToRead" },
    { title: "Read", shelf: "read" },
    { title: "None", shelf: "none" }
  ];

  filterBooksBy = (e) => {
    return this.props.books.filter(book => book.shelf === e.shelf);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map(shelf => (
              <BookGrid key={shelf.shelf} shelf={shelf} update={this.props.update} books={this.filterBooksBy(shelf)} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksCollection;
