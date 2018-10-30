import React from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component {

  moveBookTo = (shelf) => {

    console.log('shelf', shelf, this.props.book);

    BooksAPI.update(this.props.book, shelf).then((result) => {
      this.props.update(this.props.book, shelf)
    })

  };

  handleChange = (event) => {
    this.moveBookTo(event.target.value)
  }

  getImage(item) {
    return item ? item.thumbnail : "";
  }

  getAuthor(item) {
    return (item || []).join(", ");
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("' + this.getImage(this.props.book.imageLinks) + '")' }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} value={this.props.book.shelf || "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.getAuthor(this.props.book.authors)}</div>
        </div>
      </li>
    );
  }
}

export default Book;
