import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      className="p-2 border rounded"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
