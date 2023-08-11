import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
let gameMap: GameMap = [];
let player = 2;
let win = false;
//--------------------------------------
while (!win) {
  gamePlay();
}
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
      rowY.push(tile);
    }

    gameMap.push(rowY);
  }
}

function render() {
  const gameField = document.querySelector('.field');
  if (gameField !== null) {
    gameField.innerHTML = '';
  }
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      gameField?.appendChild(tile);
      if (!gameMap[x][y].isEmpty) {
        if (gameMap[x][y].isCross) {
          tile.innerText = '✗';
          console.log('isCross klappt');
        } else if (!gameMap[x][y].isCross) {
          tile.innerText = '◯';
          console.log('isCross false klappt auch ma<ybe');
        }
      } else {
        tile.innerText = '';
      }
    }
  }
}

function changePlayer() {
  if (player === 2) {
    player = 1;
  }
  if (player === 1) {
    player = 2;
  }
}

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

function playerMove() {}
