export function Duck() {

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

  };

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

  }
}
