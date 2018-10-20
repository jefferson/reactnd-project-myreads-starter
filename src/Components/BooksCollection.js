import React from 'react'
import * as BooksAPI from '../BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  shelves = [
    { title: "Currently Reading", shelf: "currentlyReading" },
    { title: "Want to Read", shelf: "wantToRead" },
    { title: "Read", shelf: "read" },
    { title: "None", shelf: "none" }
  ];

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      });
      console.log(data);
    })
  }

  filterBooksBy = (e) => {
    return this.state.books.filter(book => book.shelf === e.shelf);
  };

  moveBookTo = (book, shelf) => {

    let books = this.state.books;
    let currentBook = books.find(item => item.id === book.id);
    currentBook.shelf = shelf;

    BooksAPI.update(currentBook, shelf).then((result) => {
      this.setState({
        books: books
      })
    })

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
              <BookGrid key={shelf.shelf} shelf={shelf} books={this.filterBooksBy(shelf)} move={this.moveBookTo} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.props.showSearch(true)}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default BooksCollection;
