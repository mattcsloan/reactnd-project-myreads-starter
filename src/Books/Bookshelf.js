import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {
    const shelfId = this.props.shelf;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(function(book, i) {
              return (shelfId === book.shelf) &&
                (<li key={i}><Book content={book} /></li>)
            })}
          </ol>
        </div>
      </div>
    )
  }
};

export default Bookshelf;