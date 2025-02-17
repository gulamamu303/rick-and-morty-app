import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg">
      <img src={character.image} alt={character.name} className="w-full rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{character.name}</h2>
      <p className="text-sm">Status: {character.status}</p>
      <p className="text-sm">Species: {character.species}</p>
      <p className="text-sm">Gender: {character.gender}</p>
      <p className="text-sm">Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;
