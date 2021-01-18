import {setStyle} from './utils';
import {startGame} from './Game';
import * as Score from './Score';

export function initUI(){

  // Start Button
  let startButton = document.createElement('button');
  startButton.innerText = 'START';
  startButton.setAttribute("id", "start_button");
  setStyle(startButton, {
    width: '30%',
    height: '40px',
    border: 'solid',
    borderWidth: '0px',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    margin: '35%'
  });
  startButton.addEventListener("click", (event) => {
    startGame(startButton);
  });
  document.body.appendChild(startButton);

  // Score Panel
  let scorePanel = document.createElement('div');
  let scoreLabel = document.createElement('span');
  let scoreValue = document.createElement('span');
  scoreValue.id = 'score';
  scoreValue.innerText = '0';
  scoreLabel.innerText = 'SCORE: ';
  setStyle(scorePanel, {
    width: '100%',
    textAlign: 'center'
  });
  setStyle(scoreLabel, {
    fontFamily: 'Impact',
    fontSize: '25px'
  });
  setStyle(scoreValue, {
    fontFamily: 'Impact',
    fontSize: '25px'
  });
  scorePanel.appendChild(scoreLabel);
  scorePanel.appendChild(scoreValue);
  document.body.appendChild(scorePanel)
}

export function showRestart(won) {
  console.log("Showing Restart...")
  let restartButton = document.createElement('button');
  won === true ?
      restartButton.innerHTML = '<p>YOU WIN!</p>Click to restart'
      : restartButton.innerHTML = '<p>YOU LOSE!</p>Click to restart';

  setStyle(restartButton, {
    width: '20%',
    height: '200px',
    border: 'solid',
    borderWidth: '5px',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    margin: '35%'
  });

  restartButton.addEventListener("click", (event) => {
    Score.reset();
    startGame(restartButton);
  });
  document.body.appendChild(restartButton);

}
