import React from "react";
import "./SearchBar.scss";

function SearchBar(props) {
  function handleSubmit() {}

  return (
    <section>
      <div className="searchbar">
        <div className="container">
          <div className="searchbar__search">
            <input
              type="text"
              placeholder="...."
              className="searchbar__search-input"
            />
            <button className="searchbar__search-btn" onClick={handleSubmit}>
              Search
            </button>
          </div>
          <div className="searchbar__links">
            <a href="/">Mountain Tales</a>, <a href="/">Mountain Tales</a>,{" "}
            <a href="/">Mountain Tales</a>, <a href="/">Mountain Tales</a>,{" "}
            <a href="/">Mountain Tales</a>, ......
          </div>
          <div className="searchbar__types">
            <button>Romantic</button>
            <button>Drama</button>
            <button>Action</button>
            <button>Romantic</button>
            <button>Drama</button>
            <button>Action</button>
            <button>Teen</button>
          </div>
          <hr />
          <div className="currentsearch">
            <h5 className="currentsearch__title">Result searching for:</h5>
            <div className="currentsearch__links">
              Mountain Tales, Mountain Tales, Mountain Tales
            </div>
            <div className="currentsearch__types">
              <button>Romantic</button>
              <button>Drama</button>
              <button>Action</button>
              <button>Romantic</button>
              <button>Drama</button>
              <button>Action</button>
              <button>Teen</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
