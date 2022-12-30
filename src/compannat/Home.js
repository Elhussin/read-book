import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import HomeShelf from "./HomeShelf";
import React from "react";
const Home = ({ Books, ubdateShelf }) => {
  //  filter Coming Books To set Shelfs Spreat
  const read = Books?.filter((c) => c.shelf === "read");
  const wantToRead = Books?.filter((c) => c.shelf === "wantToRead");
  const currentlyReading = Books?.filter((c) => c.shelf === "currentlyReading");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Courrent Reding</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading?.map((booki) => (
                  <HomeShelf
                    key={booki.id}
                    booki={booki}
                    ubdateShelf={ubdateShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead?.map((booki) => (
                  <HomeShelf
                    key={booki.id}
                    booki={booki}
                    ubdateShelf={ubdateShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title"> Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read?.map((booki) => (
                  <HomeShelf
                    key={booki.id}
                    booki={booki}
                    ubdateShelf={ubdateShelf}
                  />
                ))}
              </ol>
            </div>
          </div>
          {/* search Box Button  */}
          <div className="open-search">
            <Link to="/search">Add book</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  Books: PropTypes.array.isRequired,
  ubdateShelf: PropTypes.func.isRequired,
};
export default Home;
