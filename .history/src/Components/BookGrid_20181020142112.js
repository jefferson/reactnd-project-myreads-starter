import React from 'react'
import Book from './Book'
class BookGrid extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book key={this.props.shelf} move={this.props.move} shelf={this.props.shelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookGrid;
