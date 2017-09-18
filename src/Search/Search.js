import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

class Search extends Component {
  componentWillUnmount() {
    // clear out search when you leave the /search route
    this.props.onUpdateQuery('');
  }
  render() {
    const {
      query,
      onUpdateQuery,
      filteredBooks,
      onUpdateBook
    } = this.props;

    return (
      <div className="search-books">
        <SearchBar 
          onUpdateQuery={onUpdateQuery} 
          query={query} 
        />
        <SearchList 
          filteredBooks={filteredBooks} 
          query={query} 
          onUpdateBook={onUpdateBook}
        />
      </div>
    )
  }
};

export default Search;