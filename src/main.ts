import './style.css';
let player = 1;

function changePlayer() {
  if (player === 2) {
    player = 1;
  }
  if (player === 1) {
    player = 2;
  }
}
