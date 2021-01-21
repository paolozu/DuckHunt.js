import {checkLevelSuccess} from './Game';

let scoreValue = 0;
let bestScore = getBestScore();

export function increase(value){
  let score = document.getElementById("score");
  scoreValue += value;
  score.innerText = scoreValue;
  checkLevelSuccess();
}

export function reset() {
  let score = document.getElementById("score");
  scoreValue = 0;
  score.innerText = scoreValue.toString();
}

export function checkBestScore() {
  console.log(bestScore)
  if (scoreValue > bestScore ) setBestScore(scoreValue)
}

export function getBestScore() {
  return window.localStorage.getItem('bestScore');
}

export function setBestScore(score) {
  window.localStorage.setItem('bestScore', score)
}


