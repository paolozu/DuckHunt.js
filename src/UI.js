import { setStyle } from './utils';
import { startGame } from './Game';

export function initUI() {
  showDifficultyPanel();
  showStartButton();
  showScorePanel();
}

export function showRestartButton(gameResult) {
  let restartButton = document.createElement('button');
  restartButton.classList.add('play-buttons', 'ui-element');
  restartButton.id = 'restart_button';
  restartButton.innerHTML = '<p>YOU ' + gameResult + '</p>Click here to restart';

  setStyle(restartButton, {
    width: '20%',
    height: '200px',
    border: 'solid',
    borderWidth: '5px',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    margin: '40%'
  });

  restartButton.addEventListener("click", (event) => {
    startGame();
  });
  document.body.appendChild(restartButton);
}

export function showDifficultyPanel() {
  let difficultySelect = document.createElement('select');
  difficultySelect.id = "difficulty-select";
  difficultySelect.classList.add("difficulty-panel", "ui-element");
  let option1 = document.createElement('option');
  option1.value='easy';
  option1.text='EASY';
  let option2 = document.createElement('option');
  option2.value='hard';
  option2.text='HARD';
  difficultySelect.appendChild(option1);
  difficultySelect.appendChild(option2);
  document.body.appendChild(difficultySelect);

  setStyle(difficultySelect, {
    position: 'absolute',
    width: '100px',
    height: '30px',
    textAlign: 'center',
    marginLeft: "10px",
    marginTop: "10px",
    paddingBottom: "5px",
    paddingTop: "5px"
  });
}

export function showStartButton() {

  let startButton = document.createElement('button');
  startButton.id = 'start_button';
  startButton.classList.add("play-buttons", "ui-element");
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
    startGame();
  });
  document.body.appendChild(startButton);
}

export function showScorePanel() {
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

export function hideMenu() {
  document.querySelectorAll('.ui-element').forEach(e => e.parentNode.removeChild(e));
}
