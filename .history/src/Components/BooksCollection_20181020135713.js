import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookGrid from './BookGrid';

class BooksCollection extends React.Component {

  categories = [{
    category: "Currently Reading",
  },
  {
    category: "Want to Read",
  },
  {
    category: "Read"
  }];

  state = {
    books: [],
    shelves: [{
      category: 'Currently Reading',
      books: [{}]
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

  getBooks = (category) => {
    return this.state.books.filter(book => book.category === category);
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.categories.map(i => (
              <BookGrid key={i.category} category={i.category} books={this.getBooks(i.category)} />
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
