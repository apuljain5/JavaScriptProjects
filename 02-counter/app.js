// // ______ approach 1 starts _______

// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");
// let value = document.getElementById("value");

// reset.addEventListener("click", function () {
//   value.textContent = 0;
//   setColor();
// });

// increase.addEventListener("click", function () {
//   value.textContent = parseInt(value.textContent) + 1;
//   setColor();
// });

// decrease.addEventListener("click", function () {
//   value.textContent = parseInt(value.textContent) - 1;
//   setColor();
// });

// function setColor() {
//   let curr = value.textContent;
//   if (curr < 0) {
//     value.style.color = "red";
//   } else if (curr > 0) {
//     value.style.color = "green";
//   } else {
//     value.style.color = "black";
//   }
// }
// // ______ approach 1 ends _______

// // ______ approach 2 starts _______
// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});

// // ______ approach 2 ends _______
