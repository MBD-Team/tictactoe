import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
let gameMap: GameMap = [];
let player = true; //player true = player 2
let win = false;
//--------------------------------------
while (!win) {
  gamePlay();
}
//--------------------------------------
function gamePlay() {
  generateField();
  checkWinLose();
  changePlayer();
  render();
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
          tile.onclick = () => {
            tileClick(x, y);
          };
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
  player = !player;
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
    (gameMap[0][0].isCross && gameMap[1][1].isCross && gameMap[2][2].isCross) ||
    (!gameMap[0][0].isCross && !gameMap[1][1].isCross && !gameMap[2][2].isCross) ||
    (gameMap[2][2].isCross && gameMap[1][1].isCross && gameMap[0][0].isCross) ||
    (!gameMap[2][2].isCross && !gameMap[1][1].isCross && !gameMap[0][0].isCross)
  ) {
    win = true;
  }
}

function tileClick(x: number, y: number) {
  if (!gameMap[x][y].isEmpty) {
    gameMap[x][y].isEmpty = true;
  }
}
