import React from 'react'
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './Search/Search';
import BooksList from './Books/BooksList';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route exact path="/" render={() => (
          <BooksList books={this.state.books} />
        )}  />
      </div>
    )
  }
}

export default BooksApp
