import React from 'react'
import { Link } from 'react-router-dom'
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
    this.touch();
  }

  touch = () => {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      });
    })
  }

  filterBooksBy = (e) => {
    return this.state.books.filter(book => book.shelf === e.shelf);
  };

  update = (book) => {

    let books = this.state.books;
    let currentBook = books.find(item => item.id === book.id);
    currentBook.shelf = book.shelf;

    this.setState({
      books: books
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
              <BookGrid key={shelf.shelf} shelf={shelf} update={this.touch} books={this.filterBooksBy(shelf)} />
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
