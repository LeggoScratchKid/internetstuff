let buttonClicks = 0;
let button = document.getElementById("clicky");

var mouseDown = new Audio('sounds/click_down.wav');
var mouseUp = new Audio('sounds/click_up.wav');

function clickbutton () {
  buttonClicks++;
  button.innerHTML = "Button CLicks: " + buttonClicks;
  mouseDown.play();
}

function declickbutton {  
  mouseUp.play();
}
