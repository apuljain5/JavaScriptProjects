const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //console.log(document.body);
  const randomHex = getRandomHex();
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

function getRandomHex() {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hex[Math.floor(Math.random() * hex.length)];
  }
  return randomHex;
}