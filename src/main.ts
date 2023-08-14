import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: string;
}[][];
let gameMap: GameMap = [];
let player = false; //player true = player 2
// let win = false;
//--------------------------------------
generateField();
gamePlay();

//--------------------------------------
function generateField() {
  for (let i = 0; i < 3; i++) {
    const rowY = [];
    for (let k = 0; k < 3; k++) {
      const tile = {
        isEmpty: true,
        isCross: '',
      };
      rowY.push(tile);
    }

    gameMap.push(rowY);
  }
}

function gamePlay() {
  checkWinLose();
  checkDraw();
  changePlayer();
  render();
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
      tile.onclick = () => {
        tileClick(x, y);
      };
      if (!gameMap[x][y].isEmpty) {
        if (gameMap[x][y].isCross === 'X') {
          tile.innerText = '✗';
        } else if (gameMap[x][y].isCross === 'O') {
          tile.innerText = '◯';
        }
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
      (gameMap[i][0].isCross === 'X' && gameMap[i][1].isCross === 'X' && gameMap[i][2].isCross === 'X') ||
      (gameMap[i][0].isCross === 'O' && gameMap[i][1].isCross === 'O' && gameMap[i][2].isCross === 'O') ||
      (gameMap[0][i].isCross === 'X' && gameMap[1][i].isCross === 'X' && gameMap[2][i].isCross === 'X') ||
      (gameMap[0][i].isCross === 'O' && gameMap[1][i].isCross === 'O' && gameMap[2][i].isCross === 'O') ||
      (gameMap[0][0].isCross === 'X' && gameMap[1][1].isCross === 'X' && gameMap[2][2].isCross === 'X') ||
      (gameMap[0][0].isCross === 'O' && gameMap[1][1].isCross === 'O' && gameMap[2][2].isCross === 'O') ||
      (gameMap[0][2].isCross === 'X' && gameMap[1][1].isCross === 'X' && gameMap[2][0].isCross === 'X') ||
      (gameMap[0][2].isCross === 'O' && gameMap[1][1].isCross === 'O' && gameMap[2][0].isCross === 'O')
    ) {
      // win = true;
      const winText = document.querySelector('.winText') as HTMLDialogElement;
      winText.showModal();
      setTimeout(() => {
        gameMap = [];
        generateField();
        render();
      }, 600);
    }
  }
}

function tileClick(x: number, y: number) {
  if (gameMap[x][y].isEmpty) {
    gameMap[x][y].isEmpty = false;
    if (player) {
      gameMap[x][y].isCross = 'X';
    } else {
      gameMap[x][y].isCross = 'O';
    }
  }
  gamePlay();
}

function checkDraw() {
  if (
    !gameMap[0][0].isEmpty &&
    !gameMap[0][1].isEmpty &&
    !gameMap[0][2].isEmpty &&
    !gameMap[1][0].isEmpty &&
    !gameMap[1][1].isEmpty &&
    !gameMap[1][2].isEmpty &&
    !gameMap[2][0].isEmpty &&
    !gameMap[2][1].isEmpty &&
    !gameMap[2][2].isEmpty
  ) {
    const drawText = document.querySelector('.drawText') as HTMLDialogElement;
    drawText.showModal();
    setTimeout(() => {
      gameMap = [];
      generateField();
      render();
    }, 300);
  }
}
