let textbox = document.getElementByID("punishtext");
let page = document.getElementByID("body");

function danger() {
  let punishment = math.floor(math.random()*2)+1;
  if (punishment == 1) {
    spare()
  };
  if (punisment == 2) {
    deleteWebpage()
  };
  if (punishment == 3) {
    insult()
  };
};

function spare() {
  textbox.style.color = "red";
  textbox.innerHTML = "The button has spared you. Take this chance to flee.";
};

function deleteWebpage() {
  page.innerHTML = "";
};
