import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = ({ filters, searchQuery, sortOrder }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/?page=2')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  const filteredCharacters = characters
    .filter(character =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!filters.species || character.species === filters.species) &&
      (!filters.gender || character.gender === filters.gender)
    )
    .sort((a, b) => sortOrder === 'ascending' ? a.id - b.id : b.id - a.id);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {filteredCharacters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;