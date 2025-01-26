/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function cards() {
  let cardIcons = ["♦", "♥", "♠", "♣"];
  let cardNumbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  function getRandomIcons() {
    let Icon = cardIcons[Math.floor(Math.random() * cardIcons.length)];
    let topElement = document.getElementById("topIcon");
    let bottomElement = document.getElementById("bottomIcon");
    topElement.innerHTML = Icon;
    bottomElement.innerHTML = Icon;
    if (Icon === "♦" || Icon === "♥") {
      topElement.style.color = "red";
    } else {
      topElement.style.color = "black";
    }
    if (Icon === "♦" || Icon === "♥") {
      bottomElement.style.color = "red";
    } else {
      bottomElement.style.color = "black";
    }
  }
  function getRandomNumber() {
    let randomNumber =
      cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
    document.getElementById("number").innerHTML = randomNumber;
  }

  getRandomIcons();
  getRandomNumber();
};
