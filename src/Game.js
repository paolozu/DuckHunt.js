import { Duck } from './Duck';
import { DIFFICULTY_EASY, GAMERESULT_LOSE, GAMERESULT_WIN } from './const';
import * as UI from './UI';
import * as Score from './Score';
import * as Game from './Game';

let gameResult;
let difficulty;
let numOfDucks;
let ducksAlive = [];
let gameTimeoutInterval;

export function startGame() {
  difficulty = getDifficulty();
  UI.hideMenu();
  Score.reset();
  generateDucks();
  gameTimeoutInterval = setInterval(() => resetGame(), 10700);
}

export function generateDucks() {
  difficulty === DIFFICULTY_EASY ? numOfDucks = 5 : numOfDucks = 7;

  for (let i = 0; i < numOfDucks; i++){
    let duck = new Duck(difficulty);
    duck.create();
    ducksAlive.push(duck.id);
    setTimeout(() => {
      duck.remove();
    } , 10000);
  }
}

export function removeDuck(id) {
  ducksAlive = ducksAlive.filter((duck) => {
    return duck.toString() !== id;
  });
}

export function removeAllDucks() {
  clearInterval(gameTimeoutInterval);
  ducksAlive = []
}

export function checkLevelSuccess() {
  if (ducksAlive.length === 0) {
    gameResult = GAMERESULT_WIN;
    resetGame(gameResult);
  }
}


export function getDifficulty() {
  return difficulty = document.getElementById('difficulty-select').value;
}

export function resetGame(gameResult = GAMERESULT_LOSE) {
  clearInterval(gameTimeoutInterval);
  Score.checkBestScore();
  Game.removeAllDucks();
  UI.showRestartButton(gameResult);
  UI.showDifficultyPanel();
}
