const Scores = ({ curScore, highScore }) => {
  return (
    <div className="w-full flex justify-center gap-x-10 p-3 m-4">
      <h2 className="text-xl">Current Score: {curScore}</h2>
      <h2 className="text-xl">High Score: {highScore}</h2>
    </div>
  );
};

export default Scores;
