import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { debounceSearch } = useGlobalContext();
  return (
    <div className="search section">
      <form className="search-form">
        <div className="form-control">
          <label>Search Your Favorite Cocktail</label>
          <input
            onChange={(event) => debounceSearch(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
