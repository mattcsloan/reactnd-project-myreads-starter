import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './Search/Search';
import BooksList from './Books/BooksList';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    }

    this.moveBook = this.moveBook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  moveBook(book, shelf) {
    BooksAPI.update(book, shelf).then((res) => {
      // updates the book to have the new book shelf requested
      book.shelf = shelf;
      this.setState(prevState => ({
        // removes the book, then adds it back via concat (with the updated book.shelf)
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    })

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route exact path="/" render={() => (
          <BooksList onUpdateBook={this.moveBook} books={this.state.books} />
        )}  />
      </div>
    )
  }
}

export default BooksApp
