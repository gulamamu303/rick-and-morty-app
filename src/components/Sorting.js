import React from 'react';

const Sorting = ({ setSortOrder }) => {
  return (
    <select onChange={(e) => setSortOrder(e.target.value)} >
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  );
};

export default Sorting;
