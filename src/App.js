import Player from "./components/Player.js";
import GameBoard from "./components/GameBoard.js";
import { useState } from "react";
import Log from "./components/Log.js";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handelSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((preTurns) => {
      //使用activePlayer变量虽然方便但会引入其他state，并不是最佳处理，state之间尽量不互相影响
      let currentPlayer = "X";

      if (preTurns.length > 0 && preTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { suqare: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handelSelectSquare} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
