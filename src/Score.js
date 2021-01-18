let scoreValue = 0;

export function show(isVisible){

}


export function increase(value){
  let score = document.getElementById("score");
  scoreValue += value;
  score.innerText = scoreValue;
}

export function reset() {
  let score = document.getElementById("score");
  score.innerText ='0';
}

