const heading = document.querySelector(".hero-text");
const burger = document.querySelector(".burger");
const nav = document.querySelector("ul");

function spin(event) {
  event.target.classList.add("spin");
}

function stopSpin(event) {
  event.target.classList.remove("spin");
}

wordsInHeading = heading.innerHTML.split(" ");
let modifiedHeading = [];
wordsInHeading.forEach((element) => {
  let spannedElement = "";
  for (let e of element) {
    spannedElement += `<span class="hero-letters">${e}</span>`;
  }
  modifiedHeading.push(`<span class="hero-words">${spannedElement}</span>`);
});

heading.innerHTML = modifiedHeading.join(" ");

const letters = document.querySelectorAll(".hero-letters");

letters.forEach((letter) => letter.addEventListener("mouseover", spin));

letters.forEach((letter) => letter.addEventListener("animationend", stopSpin));
