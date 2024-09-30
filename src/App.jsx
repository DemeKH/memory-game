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

  useEffect(() => {
    async function fetchPokemon(id) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemons((prev) => [
        ...prev,
        { name: data.species.name, img: data.sprites.front_default },
      ]);
      console.log(data);
    }
    pokemonIds.forEach(fetchPokemon);
  }, []);

  return (
    <>
      <Header />
      <Scores />
      <MemoryGame pokemons={pokemons} />
    </>
  );
}

export default App;
