import React from "react";
import "./style.scss";

const SearchBar = (props) => {
  return (
    <div className="searchbarDiv">
      <input
        className="searchbar"
        type="text"
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        placeholder="press Enter to search, or Esc to clear"
      />
    </div>
  );
};

export default SearchBar;
