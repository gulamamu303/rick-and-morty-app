import React from 'react';

const Filters = ({ setFilters }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">Filters</h3>
      <select onChange={(e) => setFilters(prev => ({ ...prev, species: e.target.value }))}>
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
      <select onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Filters;