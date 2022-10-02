import React, { Component } from "react";
import "./search-box.sryles.css";

const SearchBox = (props) => {
  const { onChange, placeholder, className, value } = props;

  // console.log('placeholder is: ', placeholder);

  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBox;
