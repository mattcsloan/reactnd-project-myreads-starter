import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf 
              title="Currently Reading" 
              shelf="currentlyReading" 
              books={this.props.books}
              onUpdateBook={this.props.onUpdateBook}
            />
            <Bookshelf 
              title="Want to Read" 
              shelf="wantToRead" 
              books={this.props.books} 
              onUpdateBook={this.props.onUpdateBook}
            />
            <Bookshelf 
              title="Read" 
              shelf="read" 
              books={this.props.books} 
              onUpdateBook={this.props.onUpdateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BooksList;