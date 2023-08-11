import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
const gameMap: GameMap = [];
let player = false; //player true = player 2
let win = false;

//--------------------------------------
//--------------------------------------
generateField();
gamePlay();
console.log('start');
function gamePlay() {
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
  console.log('generated');
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
      console.log('setOnclick');
      tile.onclick = () => {
        tileClick(x, y);
      };
      if (!gameMap[x][y].isEmpty) {
        console.log('test');
        if (gameMap[x][y].isCross) {
          tile.innerText = '✗';
          console.log('isCross klappt');
        } else if (!gameMap[x][y].isCross) {
          tile.innerText = '◯';
          console.log('isCross false klappt auch ma<ybe');
        }
      }
    }
  }
  console.log('rendered');
}

function changePlayer() {
  player = !player;
  console.log('changedPlayer');
}

function checkWinLose() {
  for (let i = 0; i < 3; i++) {
    if (
      (!gameMap[i][0].isEmpty && gameMap[i][0].isCross && gameMap[i][1].isCross && gameMap[i][2].isCross) ||
      (!gameMap[i][0].isEmpty && !gameMap[i][0].isCross && !gameMap[i][1].isCross && !gameMap[i][2].isCross) ||
      (!gameMap[0][i].isEmpty && gameMap[0][i].isCross && gameMap[1][i].isCross && gameMap[2][i].isCross) ||
      (!gameMap[0][i].isEmpty && !gameMap[0][i].isCross && !gameMap[1][i].isCross && !gameMap[2][i].isCross)
    ) {
      win = true;
      const winText = document.querySelector('.winText') as HTMLDialogElement;
      winText.showModal();
    }
  }
  if (
    (!gameMap[0][0].isEmpty && gameMap[0][0].isCross && gameMap[1][1].isCross && gameMap[2][2].isCross) ||
    (!gameMap[0][0].isEmpty && !gameMap[0][0].isCross && !gameMap[1][1].isCross && !gameMap[2][2].isCross) ||
    (!gameMap[0][0].isEmpty && gameMap[2][2].isCross && gameMap[1][1].isCross && gameMap[0][0].isCross) ||
    (!gameMap[0][0].isEmpty && !gameMap[2][2].isCross && !gameMap[1][1].isCross && !gameMap[0][0].isCross)
  ) {
    win = true;
    const winText = document.querySelector('.winText') as HTMLDialogElement;
    winText.showModal();
  }
  console.log('checkedWin');
}

function tileClick(x: number, y: number) {
  console.log('click', gameMap[x][y].isEmpty);
  if (gameMap[x][y].isEmpty) {
    gameMap[x][y].isEmpty = false;
    if (player) {
      gameMap[x][y].isCross = true;
    } else {
      gameMap[x][y].isCross = false;
    }
  }
  console.log('clicked', gameMap[x][y].isEmpty);
  gamePlay();
}
