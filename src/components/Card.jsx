const Card = ({ pokemonName, pokemonImgUrl }) => {
  return (
    <div className="flex flex-col items-center border rounded border-black cursor-pointer">
      <img src={pokemonImgUrl} className="size-40" />
      <h1 className="font-mono">{pokemonName}</h1>
    </div>
  );
};

export default Card;
