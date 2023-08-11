import './style.css';
let player = 1;

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
