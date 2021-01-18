import {checkLevelSuccess} from './Game';

let scoreValue = 0;

export function show(isVisible){

}


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


