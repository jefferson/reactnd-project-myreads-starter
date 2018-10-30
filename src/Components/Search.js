import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends React.Component {

  state = {
    books: []
  }

  updateQuery = (query) => {

    if (query)
      BooksAPI.search(query).then((data) => {
        if (Array.isArray(data))
          this.setState({
            books: data
          })
      })

  }

  getBooks = () => {
    return this.state.books.map(book => {
      console.log(this.props.getShelfByBookId);
      book.shelf = this.props.getShelfByBookId(book.id);
      return book;
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.getBooks().map(book => (
              <Book key={book.id} update={this.props.update} book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;