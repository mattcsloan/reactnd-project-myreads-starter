import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
        <SearchList />
      </div>
    )
  }
};

export default Search;