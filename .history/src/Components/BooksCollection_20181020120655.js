import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookGrid />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookCoollection;
