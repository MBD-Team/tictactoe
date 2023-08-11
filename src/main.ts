import './style.css';
type GameMap = {
  isEmpty: boolean;
  isCross: boolean;
}[][];
let gameMap: GameMap = [];
let player = 1;
gamePlay();

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

function checkWinLose() {}

/*
  for (let i = 0; i < 4; i++) {
    if (gameMap[i][1] === '[X]' && gameMap[i][2] === '[X]' && game[i][3] === '[X]') {
      win = true;
    }
    if (game[i][1] === '[O]' && game[i][2] === '[O]' && game[i][3] === '[O]') {
      win = true;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (game[0][i] === '[O]' && game[1][i] === '[O]' && game[2][i] === '[O]') {
      win = true;
    }
    if (game[0][i] === '[X]' && game[1][i] === '[X]' && game[2][i] === '[X]') {
      win = true;
    }
  }
  if (game[0][1] === '[O]' && game[1][2] === '[O]' && game[2][3] === '[O]') {
    win = true;
  }
  if (game[0][1] === '[X]' && game[1][2] === '[X]' && game[2][3] === '[X]') {
    win = true;
  }
  if (game[2][1] === '[O]' && game[1][2] === '[O]' && game[0][3] === '[O]') {
    win = true;
  }
  if (game[2][1] === '[X]' && game[1][2] === '[X]' && game[0][3] === '[X]') {
    win = true;
  }
  */
