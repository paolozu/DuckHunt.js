import {setStyle} from './utils';
import {Duck} from './Duck'
import {showRestart} from './UI';
import * as Score from './Score';

let game_result;
let ducksAlive = [];
let gameTimeoutInterval;

export function startGame(button) {

   if (button) button.parentNode.removeChild(button);
   generateDucks(5);
   gameTimeoutInterval = setInterval(() => showRestart(), 10000+700);

}

export  function restartGame() {

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
    game_result = "WIN";
    showRestart(game_result)
  }
}

export function reset() {
  clearInterval(gameTimeoutInterval);
  removeAllDucks();
  Score.reset();
}
