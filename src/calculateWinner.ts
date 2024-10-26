import { SquareType } from "./types";

export function calculateWinner(squares: SquareType[]) {
	const lines: number[][] = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[2, 4, 6],
		[0, 4, 8],
		[2, 5, 8],
		[1, 4, 7],
	];

  for(let i=0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
  }
  return null;
}