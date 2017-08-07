import React, { Component } from 'react';
import SearchList from './SearchList';
import SearchBar from './SearchBar';

class Search extends Component {
  componentWillUnmount() {
    // clear out search when you leave the /search route
    this.props.onUpdateQuery('');
  }
  render() {
    return (
      <div className="search-books">
        <SearchBar 
          onUpdateQuery={this.props.onUpdateQuery} 
          query={this.props.query} 
        />
        <SearchList 
          filteredBooks={this.props.filteredBooks} 
          query={this.props.query} 
          onUpdateBook={this.props.onUpdateBook}
        />
      </div>
    )
  }
};

export default Search;