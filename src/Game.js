import {setStyle} from './utils';
import {Duck} from './Duck'
import {hideMenu, showRestartButton} from './UI';
import * as Score from './Score';

let gameResult;
let ducksAlive = [];
let gameTimeoutInterval;

export function startGame() {
   hideMenu();
   generateDucks(5);
   gameTimeoutInterval = setInterval(() => resetGame(), 10000+700);
}

export function generateDucks(numOfDucks) {
  for (let i = 0; i < numOfDucks; i++){
    let duck = new Duck();
    duck.create();
    ducksAlive.push(duck.id);
    console.log(ducksAlive);
    setTimeout(() => {
      duck.remove();
    } , 10000);
  }
}

export function removeDuck(id) {
  ducksAlive = ducksAlive.filter((duck) => {
    return duck.toString() !== id;
  });
  console.log(ducksAlive)
}

export function removeAllDucks() {
  clearInterval(gameTimeoutInterval);
  ducksAlive = []
}

export function checkLevelSuccess() {
  if (ducksAlive.length === 0) {
    clearInterval(gameTimeoutInterval);
    gameResult = "WIN";
    showRestartButton()
  }
}

export function resetGame() {
  clearInterval(gameTimeoutInterval);
  removeAllDucks();
  Score.reset();
  showRestartButton();
}
