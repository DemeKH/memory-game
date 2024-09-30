import { useState, useEffect } from "react";
import Header from "./components/Header";
import Scores from "./components/Scores";
import MemoryGame from "./components/MemoryGame";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const pokemonIds = [25, 6, 1, 7, 39, 150, 95, 60, 38, 257];

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [curScore, setCurScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchPokemon(id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemons((prev) => [
        ...prev,
        {
          name: data.species.name,
          img: data.sprites.front_default,
          pokeId: data.id,
        },
      ]);
    }
    pokemonIds.forEach(fetchPokemon);
  }, []);

  useEffect(() => {
    if (selectedPokemons.length > 0) {
      const occurrences = selectedPokemons.filter(
        (item) => item === selectedPokemons[selectedPokemons.length - 1]
      ).length;
      if (occurrences === 1) {
        shuffleArray(pokemons);
        setCurScore((prev) => prev + 1);
      } else {
        alert("you lost");
        setSelectedPokemons([]);
        setCurScore(0);
      }
    }
  }, [selectedPokemons]);

  if (curScore > highScore) {
    setHighScore(curScore);
  }
  if (curScore === 10) {
    alert("you win");
    setSelectedPokemons([]);
    setCurScore(0);
  }

  return (
    <>
      <Header />
      <Scores curScore={curScore} highScore={highScore} />
      <MemoryGame
        pokemons={pokemons}
        setSelectedPokemons={setSelectedPokemons}
      />
    </>
  );
}

export default App;
