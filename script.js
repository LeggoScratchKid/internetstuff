let buttonClicks = 0;
let button = document.getElementById("clicky");

let mouseDown = new Audio('sounds/click_down.wav');
let mouseUp = new Audio('sounds/click_up.wav');

function clickbutton() {
  buttonClicks++;
  button.innerHTML = "Button Clicks: " + buttonClicks;
  mouseDown.play();
}

function declickbutton() {  
  mouseUp.play();
}

let textbox = document.getElementByID("punishtext");
let page = document.getElementByID("body");

function danger() {
  let punishment = Math.floor(Math.random()*2)+1;
  if (punishment == 1) {
    spare()
  };
  if (punisment == 2) {
    deleteWebpage()
  };
  if (punishment == 3) {
    insult()
  };
  spare()
};

function spare() {
  textbox.style.color = "red";
  textbox.innerHTML = "The button has spared you. Take this chance to flee.";
};

function deleteWebpage() {
  page.innerHTML = "";
};
