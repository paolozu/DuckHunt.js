function Duck() {

  const duck = document.createElement('div');
  duck.classList.add('duck');
  document.body.appendChild(duck);

  // batti le ali
  setInterval(() => {
    duck.classList.toggle('flap');
  }, (500));

  // genera posizione iniziale papera
  let medialPosition = Math.random() * window.innerHeight;
  let lateralPosition = Math.random() * window.innerWidth;
  duck.style.top = `${medialPosition}px`;
  duck.style.left = `${lateralPosition}px`;

  setInterval(() => {
    const newMedialPosition = Math.random() * window.innerHeight;
    const newLateralPosition = Math.random() * window.innerWidth;
    // aggiunge e rimuove la classe 'right' a seconda della direzione in cui la papera si sta muovendo.
    if (lateralPosition < newLateralPosition) {
      duck.classList.add('right');
    } else {
      duck.classList.remove('right');
    }
    // update position of duck to new coordinates
    duck.style.top = `${newMedialPosition}px`;
    duck.style.left = `${newLateralPosition}px`;
  }, (500));

  // aggiunge effetto sparo dopo il click
  duck.addEventListener('click', (event) => {
    event.target.classList.add('shot');
    setTimeout(() => {
      shot(duck);
    }, 300);
  });

  return duck;
}

function showMenu(){

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
    event.preventDefault();
  });
  document.body.appendChild(startButton);

  // Score Panel
  let scorePanel = document.createElement('div');
  setStyle(scorePanel, {
    width: '100%',
    textAlign: 'center'
  });

  let scoreLabel = document.createElement('span');
  let scoreValue = document.createElement('span');
  scoreLabel.innerText = 'SCORE: ';
  scoreValue.innerText = '0';
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

let setStyle = function(element, style) {
  for(let property in style) {
    element.style[property] = style[property];
  }
};

window.onload = () => {
  showMenu();
};

function startGame() {
  let startButton = document.getElementById("start_button");
  startButton.style.display = "none";
  for (let i = 0; i < (Math.random() * 3) + 3; i++) {
    setTimeout(() => {
      Duck();
    }, 100);
  }
}



function shot(duck) {
  duck.parentNode.removeChild(duck);
  const ducks = document.querySelectorAll('.duck');
  if (ducks.length === 0) restart();
}


function restart() {
  let wonAndRestart = document.createElement('button');
  wonAndRestart.innerHTML = 'YOU WON!\nClick to restart';
  setStyle(wonAndRestart, {
    width: '20%',
    height: '200px',
    border: 'solid',
    borderWidth: '5px',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    margin: '35%'
  });
  wonAndRestart.addEventListener("click", (event) => {
    document.body.removeChild(wonAndRestart);
    startGame();
  });
  document.body.appendChild(wonAndRestart);
}
