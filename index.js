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
      duck.parentNode.removeChild(duck);
    }, 300);
  });
}

window.onload = () => {
  Duck();
};
