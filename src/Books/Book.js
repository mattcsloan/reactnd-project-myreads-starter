import React, { Component } from 'react';
import BookMenu from './BookMenu';
class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.content.imageLinks.thumbnail}")` }}></div>
          <BookMenu />
        </div>
        <div className="book-title">{this.props.content.title}</div>
        <div className="book-authors">
          {this.props.content.authors.map((author, i) => (
            <span className="book-author" key={i}>{author}</span>
          ))}
        </div>
      </div>
    )
  }
};

export default Book;