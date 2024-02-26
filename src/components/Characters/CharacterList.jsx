import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setLastPage(data.info.pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="character-list">
      <h1>Rick & Morty Character List</h1>
      <div className="cards-container">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="navigation">
        <button
          className="prev"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          Prev Page
        </button>
        <button
          className="next"
          disabled={currentPage === lastPage}
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
