import "./SearchComponent.scss";
import useToggle from "../../hooks/useToggle";
import { useState } from "react";

function SearchComponent({ onSearch, onFilter }) {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterIsActive, toggleFilter] = useToggle(false);
  const [filterValue, setFilterValue] = useState("All");

  const onFilterClickHandler = (value) => {
    onFilter(value);
    setFilterValue(value);
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
        onClick={toggleFilter}
        className={
          filterIsActive
            ? "active fancy-btn filter-btn"
            : "fancy-btn filter-btn"
        }
      >
        <span>{filterValue}</span>
        <img src="/images/arrow.png" alt=">" />

        <ul className="filter-wrapper">
          <li
            onClick={() => {
              onFilterClickHandler("all");
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              onFilterClickHandler("complete");
            }}
          >
            Complete
          </li>
          <li
            onClick={() => {
              onFilterClickHandler("incomplete");
            }}
          >
            Incomplete
          </li>
        </ul>
      </button>
    </form>
  );
}

export default SearchComponent;
