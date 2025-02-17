import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import Sorting from "../components/Sorting";

const Home = () => {
  const [filters, setFilters] = useState({ species: "", gender: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Rick and Morty Characters</h1>

      {/* // Search & Sorting */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Sorting setSortOrder={setSortOrder} />
      </div>

      {/* Filters & Character List */}
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4">
          <Filters setFilters={setFilters} />
        </aside>
        <main className="w-full md:w-3/4">
          <CharacterList filters={filters} searchQuery={searchQuery} sortOrder={sortOrder} />
        </main>
      </div>
    </div>
  );
};

export default Home;
