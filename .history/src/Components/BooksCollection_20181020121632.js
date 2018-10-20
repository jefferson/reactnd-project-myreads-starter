import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  state = {
    categories: ['Currently Reading', 'Want to read', 'Read']
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookGrid />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default BooksCollection;
