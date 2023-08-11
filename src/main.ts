import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
let gameMap: GameMap = [];
let player = 1;

function generateField() {
  for (let i = 0; i < 3; i++) {
    const rowY = [];
    for (let k = 0; k < 3; k++) {
      const tile = {
        isEmpty: true,
        isCross: false,
      };
      const rowX = tile;
      rowY.push(rowX);
    }

    gameMap.push(rowY);
  }
}

gamePlay();

function gamePlay() {
  changePlayer();
  playerMove();
}

function changePlayer() {
  if (player === 2) {
    player = 1;
  }
  if (player === 1) {
    player = 2;
  }
}

function playerMove() {}
