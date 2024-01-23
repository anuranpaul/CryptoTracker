import React from "react";
import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({ searchText, onchangeText }) => {
  console.log(searchText);
  return (
    <div className="SearchBar">
      <div className="searchBox">
        <SearchIcon />
        <input
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            onchangeText(e.target.value);
          }}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
