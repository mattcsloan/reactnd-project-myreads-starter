import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookMenu from './BookMenu';
class Book extends Component {
  render() {
    const {
      book,
      onUpdateBook
    } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <BookMenu onUpdateBook={onUpdateBook} book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.map((author, i) => (
            <span className="book-author" key={i}>{author}</span>
          ))}
        </div>
      </div>
    )
  }
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;