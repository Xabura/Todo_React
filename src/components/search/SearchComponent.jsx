import "./SearchComponent.scss";

import { useState, useEffect } from "react";

function SearchComponent({ onSearch, onFilter }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterIsActive, setFilterIsActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const onFilterToggle = () => {
    setFilterIsActive(!filterIsActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <form action="">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search note..."
          className="search-input"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />

        <button className="search-btn">
          <img src="/images/search.svg" alt="Search" />
        </button>
      </div>
      <button
        type="button"
        onClick={onFilterToggle}
        className={
          filterIsActive
            ? "active fancy-btn filter-btn"
            : "fancy-btn filter-btn"
        }
      >
        <span>All</span>
        <img src="/images/arrow.png" alt=">" />

        <ul className="filter-wrapper">
          <li
            onClick={() => {
              onFilter("all");
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              onFilter("complete");
            }}
          >
            Complete
          </li>
          <li
            onClick={() => {
              onFilter("incomplete");
            }}
          >
            Incomplete
          </li>
        </ul>
      </button>
      <button
        className="fancy-btn dark-mode-btn"
        type="button"
        onClick={toggleDarkMode}
      ></button>
    </form>
  );
}

export default SearchComponent;
