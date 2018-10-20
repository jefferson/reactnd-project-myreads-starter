import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  shelves = ["Currently Reading", "Want to Read", "Read", "None"];

  state = {
    books: []
  }

  componentDidMount() {

  }

  filterBooksBy = (category) => {
    return this.state.books.filter(book => book.category === category);
  };

  moveBookTo = (id, category) => {

    this.setState((prevState) => {

      let books = prevState.books;
      let book = books.find(book => book.id === id);

      book.category = this.category;

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
              <BookGrid key={shelf} shelf={shelf} books={this.filterBooksBy(shelf)} move={moveBookTo} />
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
