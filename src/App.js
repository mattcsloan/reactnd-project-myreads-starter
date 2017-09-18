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
      query: '',
      filteredBooks: [],
    }

    this.moveBook = this.moveBook.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
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
        books: prevState.books.filter(b => b.id !== book.id).concat(book),
        // remove the book from the filteredBooks state so that when adding via search results, it removes the book
        // filteredBooks: prevState.filteredBooks.filter(b => b.id !== book.id)
      }));
    })
  }

  updateQuery(query) {
    const maxResults = 20;
    this.setState({query});
    if(!query) {
      this.setState({
        filteredBooks: []
      });
    } else {
      BooksAPI.search(query, maxResults).then((filteredBooks) => {
        if(filteredBooks.length) {
          filteredBooks.map(book => {
            const matchedBook = this.state.books.filter(b => b.id === book.id);
            if(matchedBook.length) {
              filteredBooks = filteredBooks.filter(b => b.id !== book.id).concat(matchedBook[0]);
            }
          });
        }
        this.setState({
          filteredBooks
        });
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search 
            onUpdateBook={this.moveBook} 
            onUpdateQuery={this.updateQuery} 
            query={this.state.query} 
            filteredBooks={this.state.filteredBooks} 
          />
        )}  />
        <Route exact path="/" render={() => (
          <BooksList 
            onUpdateBook={this.moveBook} 
            books={this.state.books} 
          />
        )}  />
      </div>
    )
  }
}

export default BooksApp
