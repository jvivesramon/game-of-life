import HomeStyled from "./HomeStyles";

const Home = (): React.ReactElement => {
  const totalSquares: number[] = [];

  const getSquares = (totalNumber: number): unknown => {
    return totalNumber && totalSquares.push(1) && getSquares(totalNumber - 1);
  };

  getSquares(5);

  return (
    <HomeStyled>
      {totalSquares.map((_square, index) => (
        <div key={index} className={`yellow-square`} />
      ))}
    </HomeStyled>
  );
};

export default Home;
