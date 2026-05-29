let buttonClicks = 0;
let button = document.getElementById("clicky");

let mouseDown = new Audio('sounds/click_down.wav');
let mouseUp = new Audio('sounds/click_up.wav');

function clickbutton() {
  buttonClicks++;
  button.innerHTML = "Button CLicks: " + buttonClicks;
  mouseDown.play();
}

function declickbutton() {  
  mouseUp.play();
}
