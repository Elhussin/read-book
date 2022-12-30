import PropTypes from "prop-types";
import React from "react";

const HomeShelf = ({ booki, ubdateShelf }) => {
  // Get The Stat Of Shlef To Update
  const handelSelects = (e, book) => {
    const values = e.target.value;
    if (ubdateShelf) {
      ubdateShelf(book, values);
    }
  };

  return (
    <div>
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
              <select defaultValue={booki?.shelf}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="wantToRead">Want to Read </option>
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
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

HomeShelf.propTypes = {
  booki: PropTypes.object.isRequired,
  ubdateShelf: PropTypes.func.isRequired,
};

export default HomeShelf;
