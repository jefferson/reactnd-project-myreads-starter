import React from 'react'
import { Route } from 'react-router-dom'
import BooksCollection from './Components/BooksCollection'
import Search from './Components/Search'
import './App.css'

class BooksApp extends React.Component {

  state = {}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksCollection />
        )} />
        <Route exact path="/search" render={() => (
          <Search />
        )}>
        </Route>
      </div>
    );
  }
}

export default BooksApp;
