import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  state = {
    shelves: [{
      category: 'Currently Reading',
      books: []
    },
    {
      category: 'Want to Read',
      books: []
    },
    {
      category: 'Read',
      books: []
    }]
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <BookGrid category={shelf.category} books={shelf.books} />
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.showSearch(true)}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default BooksCollection;
