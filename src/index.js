import './style.css';

window.onload = () => {
  initUI();
};


/* ~~~~~~~   DUCK  ~~~~~~~ */

function Duck() {

  this.show = function() {
    this.element = document.createElement('div');
    this.element.classList.add('duck');
    document.body.appendChild(this.element);

    // Animazione "batti le ali"
    this.flapInterval = setInterval(() => {
      this.element.classList.toggle('flap');
    }, (500));

    //  Generazione posizione iniziale random
    let medialPosition = Math.random() * window.innerHeight;
    let lateralPosition = Math.random() * window.innerWidth;
    this.element.style.top = `${medialPosition}px`;
    this.element.style.left = `${lateralPosition}px`;

    // Muovi papera
    this.positionInterval = setInterval(() => {
      const newMedialPosition = Math.random() * window.innerHeight;
      const newLateralPosition = Math.random() * window.innerWidth;

      // Aggiunge e rimuove la classe 'right' a seconda della direzione in cui la papera si sta muovendo.
      if (lateralPosition < newLateralPosition) {
        this.element.classList.add('right');
      } else {
        this.element.classList.remove('right');
      }

      // Aggiorna posizione della papera alle nuove coordinate
      this.element.style.top = `${newMedialPosition}px`;
      this.element.style.left = `${newLateralPosition}px`;
    }, (500));

    // Aggiunge effetto sparo dopo il click
    this.element.addEventListener('click', (event) => {
      event.target.classList.add('shot');
      setTimeout(() => {
        shot(this.element);
      }, 300);
    });

  }


  this.remove = function(){
    console.log("Remove in progress...")
    clearInterval(this.positionInterval);
    this.element.style.top = '-600px';
    setTimeout( ()  => {
      clearInterval(this.flapInterval);
      this.element.parentNode.removeChild(this.element)
    },1500)
  }

}

function shot(duck) {
  if (duck != null) duck.parentNode.removeChild(duck);
  const ducks = document.querySelectorAll('.duck');
  if (ducks.length === 0) {

  };
}

function startGame(button) {
  if (button) button.parentNode.removeChild(button);

  for (let i = 0; i < 5; i++){
    let duck = new Duck();
    duck.show();
    setTimeout(() => {
      duck.remove()
    } , 10000);
  }

  setTimeout(() => showRestart(), 10000+700);

}

function showRestart(won) {
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
    startGame(restartButton);
    document.body.removeChild(restartButton);
  });
  document.body.appendChild(restartButton);

}


let setStyle = function(element, style) {
  for(let property in style) {
    element.style[property] = style[property];
  }
};


/* ~~~~~~~   GAME  ~~~~~~~ */

function Game() {

  this.gameRunning = false;
  this.win = false;
  this.score = 0;

  this.start = () => {

    if (!this.gameRunning){
      let restartButton = document.createElement('button');
      win === true ?
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
        startGame(restartButton);
        document.body.removeChild(restartButton);
      });
      document.body.appendChild(restartButton);

      this.gameRunning = true;
      this.gameCheckInterval = setInterval(() => {
        this.gameCheck();
      },)

      //if (button) button.parentNode.removeChild(button)

      for (let i = 0; i < 5; i++){
        let duck = new Duck()
        duck.show()
        setTimeout(() => {
          duck.remove()
        } , 10000)
      }

    }}

  this.stop = () => {
    this.gameRunning = false;
  }

  this.setDifficult = (value) => {
    this.difficult = value;
  }

  this.gameCheck = () => {
    this.gameRunning ?
        setInterval( () => {
          const ducks = document.querySelectorAll('.duck');
          if (ducks.length === 0) this.stop();
        }, 50)
        : clearInterval(this.gameCheckInterval);
  }

}

/* ~~~~~~~   UI  ~~~~~~~ */

function initUI(){

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
