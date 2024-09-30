const Card = ({ pokemonName, pokemonImgUrl, setSelectedPokemons }) => {
  function handleClick() {
    setSelectedPokemons((prev) => [...prev, pokemonName]);
  }

  return (
    <div
      className="flex flex-col items-center border rounded border-black cursor-pointer"
      onClick={() => handleClick(pokemonName)}
    >
      <img src={pokemonImgUrl} className="size-40" />
      <h1 className="font-mono">{pokemonName}</h1>
    </div>
  );
};

export default Card;
