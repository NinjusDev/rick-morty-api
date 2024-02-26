import React, { useState } from "react";
import CharacterCard from "../Characters/CharacterCard";
import "./Loading.css";

function Loading() {
  const [character, setCharacter] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacter = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomCharacter = data.results[randomIndex];
      return randomCharacter;
    } catch (error) {
      console.error(error);
    }
  };

  const changeCharacter = async () => {
    // Mostrar el texto "I'm loading"
    setIsLoading(true);

    // Simular un retraso de 0.8 segundos
    setTimeout(async () => {
      const randomCharacter = await getCharacter();
      setCharacter(randomCharacter);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <div className="loadcharacter">
        <button onClick={changeCharacter}>Search random character</button>
      </div>

      <div className="loadcharacter">
        {isLoading ? (
          <h1>I'm loading</h1>
        ) : character !== undefined ? (
          <CharacterCard key={character.id} character={character} />
        ) : null}
      </div>
    </>
  );
}

export default Loading;
