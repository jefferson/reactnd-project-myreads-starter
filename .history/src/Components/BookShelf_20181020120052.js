import React from 'react'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          {/* BookGridComponent */}
        </div>
      </div>
    );
  }
}

export default BookShelf;
