import React from 'react'
import Book from './Book'
class BookGrid extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book key={this.props.category} category={this.props.category} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookGrid;
