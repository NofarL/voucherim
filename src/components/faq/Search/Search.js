import React from 'react';
import './Search.scss';

const Search = ({ search, searchHandler }) => {
  return (
    <form>
      <label htmlFor="search">חיפוש מהיר:</label>
      &nbsp;
            <input
        type="text"
        name="search"
        value={search}
        onChange={searchHandler}
      />
    </form>
  );
}

export default Search;