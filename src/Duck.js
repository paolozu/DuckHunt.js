import * as Score from "./Score";
import * as Game from "./Game";
import { setStyle } from './utils';
import {DIFFICULTY_EASY} from './const';

export function Duck(difficulty) {

  this.id = Math.floor(100000 + Math.random() * 900000);
  this.speed = difficulty === DIFFICULTY_EASY ? '3s' : '1s';

  this.create = function() {
    this.element = document.createElement('div');
    this.element.classList.add('duck');
    this.element.id= this.id.toString();
    document.body.appendChild(this.element);

    // Animazione "batti le ali"
    this.flapInterval = setInterval(() => {
      this.element.classList.toggle('flap');
    }, (500));

    //  Generazione posizione iniziale random
    let verticalPosition = Math.random() * window.innerHeight;
    let lateralPosition = Math.random() * window.innerWidth;
    this.element.style.top = `${verticalPosition}px`;
    this.element.style.left = `${lateralPosition}px`;

    this.setSpeed(this.element, this.speed);

    // Muovi papera
    this.positionInterval = setInterval(() => {
      const newVerticalPosition = Math.random() * window.innerHeight;
      const newLateralPosition = Math.random() * window.innerWidth;

      // Aggiunge e rimuove la classe 'right' a seconda della direzione in cui la papera si sta muovendo.
      if (lateralPosition < newLateralPosition) {
        this.element.classList.add('right');
      } else {
        this.element.classList.remove('right');
      }

      // Aggiorna posizione della papera alle nuove coordinate
      this.element.style.top = `${newVerticalPosition}px`;
      this.element.style.left = `${newLateralPosition}px`;
    }, (500));

    // Aggiunge effetto sparo dopo il click
    this.element.addEventListener('click', (event) => {
      event.target.classList.add('shot');
      setTimeout(() => {
        this.shot(this.element);
      }, 300);
    });

  };

  this.shot = function(duck) {
    if (duck != null) duck.parentNode.removeChild(duck);
    Game.removeDuck(duck.id);
    Score.increase(1);
  };

  this.setSpeed = function(element, speed) {
    setStyle(element, {
      transition: `top ${speed}, left ${speed}`
    });
  };

  this.remove = function(){
    console.log("Remove in progress...")
    clearInterval(this.positionInterval);

    // Animazione 'vola via'
    this.element.style.top = '-600px';

    setTimeout( ()  => {
      clearInterval(this.flapInterval);
      this.element.remove();
    },1500)
  };

}
