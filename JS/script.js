const inputText = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const copyIcon = document.querySelector(".icon");

// const generator = require("generate-password");
// const password = generator.generate({
//   length: 12,
//   numbers: true,
//   symbols: true,
//   uppercase: true,
//   lowercase: true,
// });

const capital = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_-+=[]{}|;:,.<>/?";
const number = "0123456789";
// const characters = capital
//   .split("")
//   .concat(symbol.split(""))
//   .concat(small.split(""))

//   .concat(number.split(""));

const characters = (capital + small + symbol + number).split("");

let randomPass;

btn.addEventListener("click", () => {
  randomPass = "";
  randomPass += capital[Math.floor(Math.random() * capital.length)];
  randomPass += small[Math.floor(Math.random() * small.length)];
  for (let i = 0; i < 10; i++) {
    randomPass += characters[Math.floor(Math.random() * characters.length)];
  }
  inputText.value = randomPass;
});

copyIcon.addEventListener("click", () => {
  inputText.select();
  document.execCommand("copy");
});
