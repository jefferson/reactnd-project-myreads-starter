import React from 'react'

class BookShelf extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  {/* BookGridComponent */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
