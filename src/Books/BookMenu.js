import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookMenu extends Component {
  updateBook(shelf) {
    this.props.onUpdateBook(this.props.book, shelf);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf ? this.props.book.shelf : ''} onChange={(e) => this.updateBook(e.target.value)}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
};

BookMenu.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookMenu;