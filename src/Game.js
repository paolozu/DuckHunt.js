import {setStyle} from './utils';
import {Duck} from './Duck'
import {showRestart} from './UI';


export function startGame(button) {

   if (button) button.parentNode.removeChild(button);
   generateDucks(5);
   setTimeout(() => showRestart(), 10000+700);

}

export  function restartGame() {

}

export function generateDucks(numOfDucks) {
  for (let i = 0; i < numOfDucks; i++){
    let duck = new Duck();
    duck.create();
    setTimeout(() => {
      duck.remove();
    } , 10000);
  }
}
