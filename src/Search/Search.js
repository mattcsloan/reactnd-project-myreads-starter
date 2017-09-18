import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  onUpdateBook: PropTypes.func.isRequired,
  onUpdateQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  filteredBooks: PropTypes.array.isRequired
};

export default Search;