import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from '../Books/Book';

class SearchList extends Component {
  render() {
    const {
      filteredBooks,
      onUpdateBook
    } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
           {filteredBooks.length > 0 && filteredBooks.map(function(book, i) {
            return (
              <li key={i}>
                <Book book={book} onUpdateBook={onUpdateBook} />
              </li>
            )
          })}  
        </ol>
      </div>
    )
  }
};

SearchList.propTypes = {
  query: PropTypes.string.isRequired,
  filteredBooks: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
};

export default SearchList;