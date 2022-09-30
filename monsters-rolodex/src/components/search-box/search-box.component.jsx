import React, { Component } from 'react';
import './search-box.sryles.css'
class SearchBox extends Component {
  render() {

    const { onChange, placeholder, className } = this.props;

    console.log('placeholder is: ', placeholder);

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        // value={searchQuery}
        onChange={onChange}

      />
    );
  }
}

export default SearchBox;
