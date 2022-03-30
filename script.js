const quoteAuthor = document.querySelector(".quote-author");
const quoteText = document.querySelector(".quote-text");
const button = document.querySelector(".button");
const url = "https://www.breakingbadapi.com/api/quotes";

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playSound() {
  var sound = new Audio("./assets/ogg/rld.mp3");
  sound.play();
}
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  playSound();
  showData(data);
}
async function showData(data) {
  let idx = getRandomInRange(0, data.length);
  quoteText.textContent = data[idx].quote;
  quoteAuthor.textContent = data[idx].author + " said:";
}

window.onunload = getData;
button.addEventListener("click", getData);
