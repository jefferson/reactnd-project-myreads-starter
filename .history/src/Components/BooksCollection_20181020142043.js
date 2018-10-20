import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  shelves = [{ title: "Currently Reading", value: "currentlyReading" },
  { title: "Want to Read", value: "wantToRead" },
  { title: "Read", value: "read" },
  { title: "None", value: "none" }];

  state = {
    books: []
  }

  componentDidMount() {

  }

  filterBooksBy = (category) => {
    return this.state.books.filter(book => book.category === category);
  };

  moveBookTo = (id, category) => {

    let books = this.state.books;
    let book = books.find(book => book.id === id);
    book.category = category;

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
              <BookGrid key={shelf} shelf={shelf} books={this.filterBooksBy(shelf)} move={this.moveBookTo} />
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
