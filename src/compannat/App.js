import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import Home from "./Home";
import SearchShelf from "./SearchShelf";
import Search from "./Search";
import * as BooksAPI from "../api/BooksAPI";
import Error from "./Error";

const App = () => {
  const [Books, setBooks] = useState([]);
  const [Searchs, sterSearchs] = useState("");
  const [getSearch, stegetSearch] = useState([]);
  // Get Gll Book ON My Shelfs From Book Api
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI?.getAll(); 
      if (res.error) {
        console.log("Plaase Cheake This Error:", res.error)
        setBooks([]);
      } else {
        setBooks(res);
      }

    };
    getBooks();
  }, []);

  //  Get The Search Valu From User Inputb
  const SearchsincomeValue = (prop) => {
    sterSearchs(prop);
  };

  //Show The Book Finded On  Search Page
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        if (Searchs) {
          const res = await BooksAPI?.search(Searchs);
          if (res.error) {
            console.log("Plaase Cheake This Error", res.error);
            stegetSearch([]);
          } else {
            stegetSearch(res);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [Searchs]);

  // Update Shelf State
  const ubdateShelf = (book, shelf) => {
    book.shelf = shelf;
    BooksAPI?.update(book, shelf).then(() => {
      setBooks([...Books.filter((b) => b.id !== book.id), book].concat());
    });
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            Books={Books}
            ubdateShelf={(book, shelf) => {
              ubdateShelf(book, shelf);
            }}
          />
        }
      />
      <Route
        exact
        path="/Search"
        element={
          <Search
            Searchs={SearchsincomeValue}
            ubdateShelf={(book, shelf) => {
              ubdateShelf(book, shelf);
            }}
            GetSearch={getSearch}
            SearchShelf={SearchShelf}
            Books={Books}
          />
        }
      />
      <Route path="/" 
      element={<Error />} />

    </Routes>
  );
};
export default App;
