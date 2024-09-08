// Variáveis:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const cookieBtn = document.querySelector("#btn-cookie");
const anotherCookieBtn = document.querySelector("#btn-another-cookie");

const fortuneMessage = document.querySelector("#fortune-message");
const fortuneMessagesData = [
  "A solidão é a sorte de todos os espíritos excepcionais.",
  "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.",
  `Três amores... Quem me deu
Tão estranha sorte assim?
Três amores, tenho-os eu
E nenhum me tem a mim!`,
  "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores."

];

// Eventos:
cookieBtn.addEventListener("click", handleCookieClick);
anotherCookieBtn.addEventListener("click", handleAnotherCookieClick);

// Funções:
function handleCookieClick(e) {
  toggleScreen(screen2, screen1);
  pickMessage();
}

function handleAnotherCookieClick(e) {
  toggleScreen(screen1, screen2);
}

function pickMessage() {
  let allMessages = fortuneMessagesData.length;
  console.log(allMessages);
  let randomNumber = Math.floor(Math.random() * allMessages);
  console.log(randomNumber);
  screen2.querySelector(
    "h3"
  ).innerText = `${fortuneMessagesData[randomNumber]}`;
}

function toggleScreen(showScreen, hideScreen) {
  showScreen.classList.remove("hide");
  hideScreen.classList.add("hide");
}
