import React from 'react';
import PropTypes from "prop-types";
import './styles.css'

const SearchBox = (props) => {

  const { text, handleTextChange } = props;

  return (
    <input type="text" value={text} className={'search-box'} onChange={handleTextChange} />
  )
}

SearchBox.propTypes = {
  text: PropTypes.string,
  handleTextChange: PropTypes.func
};

export default SearchBox;
