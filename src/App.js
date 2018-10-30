import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksCollection from './Components/BooksCollection'
import Search from './Components/Search'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    BooksAPI.getAll().then((data) => {
      this.setState({
        books: data
      });
    })
  }

  update = (book, shelf) => {

    let books = this.state.books;
    let currentBook = books.find(item => item.id === book.id);

    if (currentBook)
      currentBook.shelf = shelf;
    else {
      book.shelf = shelf;
      books.push(book);
    }

    this.setState({
      books: books
    })

  };

  getShelfByBookId = (id) => {

    let item = this.state.books.find(book => book.id === id);

    if (item)
      return item.shelf;

    return "none";
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksCollection books={this.state.books} update={this.update} />
        )} />
        <Route exact path="/search" render={() => (
          <Search getShelfByBookId={this.getShelfByBookId} update={this.update} />
        )}>
        </Route>
      </div>
    );
  }
}

export default BooksApp;
