import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section class="list-books">
      <div class="bookshelf">
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not available!</p>
        <Link to="/" className="close-search">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
