var playButton = document.getElementById("play-btn");
var inputRange = document.getElementById("nb-dice-range");
var outputDisplay = document.getElementById("nb-dice-display");

//on tire un nombre au hasard
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

//on créer le dès et on l'ajoute ds un div
function createDice(targetId) {
  var dice = document.createElement("div");
  dice.classList.add("dice");
  var diceValue = getRandomNumber(1, 6);
  dice.style.backgroundPosition = -(diceValue - 1) * 100 + "px 0";
  document.getElementById(targetId).appendChild(dice);
}

function play(nbDices) {
  // boucle pour créer autant de dès que demandé
  for (var nbDice = 0; nbDice < nbDices; nbDice++) {
    createDice("player");
    setTimeout(createDice, 1000, "dealer");
    console.log('je suis non bloquant');
  }
}

//vide les divs contenant les dés
function resetBoard() {
  document.getElementById("player").textContent = "";
  document.getElementById("dealer").textContent = "";
}

//démarre une partie
function startNewGame() {
  resetBoard();
  play(Number(inputRange.value));
}

function updateOutput() {
  outputDisplay.textContent = inputRange.value;
}

//ajout du gestionaire d'événement sur le click du bouton
playButton.addEventListener("click", startNewGame);
inputRange.addEventListener("input", updateOutput);