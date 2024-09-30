import Card from "./Card";

const MemoryGame = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5 p-5">
      {pokemons.map((pokemon) => {
        return <Card pokemonName={pokemon.name} pokemonImgUrl={pokemon.img} />;
      })}
    </div>
  );
};

export default MemoryGame;
