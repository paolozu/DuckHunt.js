import {setStyle} from './utils';
import {Duck} from './Duck'

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
        let duck = new Duck();
        duck.show();
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

export function startGame(button) {
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


export function showRestart(won) {
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
