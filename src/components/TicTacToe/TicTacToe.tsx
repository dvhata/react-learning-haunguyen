import { useState } from "react";

export interface SquareProps {
  value: string;
  onSquareClick: (value: number) => void;
}

function Square(props: SquareProps) {
  const { value, onSquareClick } = props;
  // return (
  // <button className="square" onClick={onSquareClick(value)}>
  //   {value}
  // </button>
  // );
}

export default function TicTacToeBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // function handleClick((value) => {
  //   const nextSquares = squares.slice();
  //   nextSquares[0] = "X";
  //   setSquares(nextSquares);
  // })

  return (
    <>
      {/* <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div> */}
    </>
  );
}
