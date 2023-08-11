import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
let gameMap: GameMap = [];
let player = 1;
let win = false;
//--------------------------------------
gamePlay();
//--------------------------------------
function gamePlay() {
  generateField();
  render();
  checkWinLose();
  changePlayer();
  playerMove();
}

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

function render() {
  const gameField = document.querySelector('.field');
  if (gameField !== null) {
    gameField.innerHTML = '';
  }
  gameField?.setAttribute('style', `grid-template-columns: repeat(${3},1fr); width: ${50 * 3}px;`);
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const tile = document.createElement('div');
      tile.className = 'tile';

      gameField?.appendChild(tile);
      if (!gameMap[x][y].isEmpty) {
        if (gameMap[x][y].isCross) {
          tile.innerHTML = '✗';
        } else if (gameMap[x][y].isEmpty) {
          if (!gameMap[x][y].isCross) {
            tile.innerHTML = '◯';
          } else {
            tile.innerHTML = '';
          }
        }
      }
    }
  }
}
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

function checkWinLose() {
  for (let i = 0; i < 3; i++) {
    if (
      (gameMap[i][0].isCross && gameMap[i][1].isCross && gameMap[i][2].isCross) ||
      (!gameMap[i][0].isCross && !gameMap[i][1].isCross && !gameMap[i][2].isCross) ||
      (gameMap[0][i].isCross && gameMap[1][i].isCross && gameMap[2][i].isCross) ||
      (!gameMap[0][i].isCross && !gameMap[1][i].isCross && !gameMap[2][i].isCross)
    ) {
      win = true;
    }
  }
  if (
    (gameMap[0][1].isCross && gameMap[1][2].isCross && gameMap[2][3].isCross) ||
    (!gameMap[0][1].isCross && !gameMap[1][2].isCross && !gameMap[2][3].isCross) ||
    (gameMap[2][1].isCross && gameMap[1][2].isCross && gameMap[0][3].isCross) ||
    (!gameMap[2][1].isCross && !gameMap[1][2].isCross && !gameMap[0][3].isCross)
  ) {
    win = true;
  }
}
