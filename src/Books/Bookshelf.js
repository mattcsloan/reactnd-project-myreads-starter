import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class Bookshelf extends Component {
  render() {
    const shelfId = this.props.shelf;
    const onUpdateBook = this.props.onUpdateBook;
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(function(book, i) {
              return (shelfId === book.shelf) &&
                (<li key={i}><Book book={book} onUpdateBook={onUpdateBook} /></li>)
            })}
          </ol>
        </div>
      </div>
    )
  }
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Bookshelf;