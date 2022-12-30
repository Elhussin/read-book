import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import SearchShelf from "./SearchShelf";
import PropTypes from "prop-types";
const Search = ({ Searchs, ubdateShelf, GetSearch, Books }) => {
  // Get Iput Value 
  const getValue = (e) => {
    let inputValue = e.target.value;
    Searchs(inputValue);
  };
  const [sehlf, setShelfs] = useState('');

  const setShelf = () => {
    let men = "null";
    GetSearch.forEach((element) => {
      Books?.forEach((elementBook) => {
        if (element.id === elementBook.id) {
          men = elementBook.shelf;
        } else (
          men = "none"
        )

      });

      setShelfs(men)

    })
  }


  return (
    // Search arrye
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              className="search-contacts"
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={(e) => getValue(e)}
            />
          </div>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">All Books</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {GetSearch?.map((booki) => (
              <SearchShelf
                key={booki?.id}
                booki={booki}
                setShelf={sehlf}
                // GetSearch={GetSearch}
                ubdateShelf={ubdateShelf}
                Books={Books}
              />
            ))}        </ol>
        </div>
      </div>
    </div>
  );
};
Search.propTypes = {
  Searchs: PropTypes.func.isRequired,
  Books: PropTypes.array.isRequired,
  GetSearch: PropTypes.array.isRequired,
  ubdateShelf: PropTypes.func.isRequired,
};

export default Search;
