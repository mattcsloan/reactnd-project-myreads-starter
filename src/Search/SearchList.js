import React, { Component } from 'react';

import Book from '../Books/Book';

class SearchList extends Component {
  render() {
    const onUpdateBook = this.props.onUpdateBook;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
           {this.props.filteredBooks.length > 0 && this.props.filteredBooks.map(function(book, i) {
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

export default SearchList;