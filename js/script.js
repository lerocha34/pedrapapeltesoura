let pedra = document.getElementById("rock");
let papel = document.getElementById("paper");
let tesoura = document.getElementById("scizor");
let npcImage = document.querySelector("#npc-area img");
let playerImage = document.querySelector("#player-area img");
let clear = document.getElementById("clear");
let message = document.getElementById("message");
let playerScore = document.getElementById("player-score");
let npcScore = document.getElementById("npc-score");

let playerNow = 1;
let npcNow = 1;

function showPaper() {
  playerImage.style.visibility = "visible";
  playerImage.src = "img/playerpaper.png";
  playerChoice = 1;
  let sort = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  switch (sort) {
    case 0:
      npcImage.src = "img/npcpaper.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "EMPATE";
      break;
    case 1:
      npcImage.src = "img/npcrock.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Papel embrulha Pedra - VITÓRIA";
      playerScore.innerText = playerNow++;
      break;
    case 2:
      npcImage.src = "img/npcscizor.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Tesoura corta Papel - DERROTA";
      npcScore.innerText = npcNow++;
      break;
  }
}
function showRock() {
  playerImage.style.visibility = "visible";
  playerImage.src = "img/playerrock.png";
  npcImage.style.visibility = "visible";
  let sort = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  switch (sort) {
    case 0:
      npcImage.src = "img/npcpaper.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Papel Embrulha Pedra - DERROTA";
      npcScore.innerText = npcNow++;
      break;
    case 1:
      npcImage.src = "img/npcrock.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "EMPATE";
      break;
    case 2:
      npcImage.src = "img/npcscizor.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Pedra amassa Tesoura - VITÓRIA";
      playerScore.innerText = playerNow++;
      break;
  }
}
function showScizor() {
  playerImage.style.visibility = "visible";
  playerImage.src = "img/playerscizor.png";
  npcImage.style.visibility = "visible";
  let sort = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  switch (sort) {
    case 0:
      npcImage.src = "img/npcpaper.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Tesoura corta Papel - VITÓRIA";
      playerScore.innerText = playerNow++;
      break;
    case 1:
      npcImage.src = "img/npcrock.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "Pedra amassa Tesoura - DERROTA";
      npcScore.innerText = npcNow++;
      break;
    case 2:
      npcImage.src = "img/npcscizor.png";
      npcImage.style.visibility = "visible";
      message.style.visibility = "visible";
      message.innerText = "EMPATE";
      break;
  }
}
function clearAll() {
  playerImage.style.visibility = "hidden";
  npcImage.style.visibility = "hidden";
  message.innerText = "";
  npcNow = 1;
  playerNow = 1;
  npcScore.innerText = "0";
  playerScore.innerText = "0";
}

papel.addEventListener("click", showPaper);
pedra.addEventListener("click", showRock);
tesoura.addEventListener("click", showScizor);
clear.addEventListener("click", clearAll);
