import React from "react";
import PropTypes from "prop-types";

const SearchShelf = ({ booki, ubdateShelf, setShelf }) => {
  // Handel Select Shlefs

  const handelSelects = (e, book) => {
    const values = e.target.value;
    if (ubdateShelf) {
      ubdateShelf(book, values);
    }
  };

  // To Set The Shelf Stet on Th Search Page Same The Home Page
  return (
    <div>
      {/* {GetSearch.map((booki) => ( */}
      <li key={booki?.id} onChange={(e) => handelSelects(e, booki)}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${booki?.imageLinks?.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                defaultValue={setShelf}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="currentlyReading">
                  Currently Reading
                </option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{booki?.title}</div>
          <div className="book-authors">{booki?.authors}</div>
        </div>
      </li>
    </div>
  );
};

SearchShelf.propTypes = {
  ubdateShelf: PropTypes.func.isRequired,
};

export default SearchShelf;
