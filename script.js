let buttonClicks = 0;
let button = document.getElementById("clicky");

clicky.onclick = function () {
  buttonClicks++;
  button.innerHTML = count;
}
