"use strict";

///////// DOM ELEMENTS /////////

const billAmount = document.querySelector(".bill-amount");
const tipPercentageBtnAll = document.querySelectorAll(".tip-percentage-btn");
const tipPercentageInput = document.querySelector(".tip-percentage-input");
const numPeople = document.querySelector(".no-people");
const calculate = document.querySelector(".calculator-btn");
const reset = document.querySelector(".reset-btn");

///////// FILL IN /////////

let bill = billAmount.value;

const findTip = () => {
  let tip;

  if (tipPercentageInput.value) {
    tip = tipPercentageInput.value;
    console.log(tip);
  } else {
    tipPercentageBtnAll.forEach((btn) => {
      btn.addEventListener("click", function () {
        tipPercentageBtnAll.forEach((el) => {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          } else if (el === btn) {
            el.classList.add("active");
          }
        });
      });
    });
  }
};

// function findTip() {
//   tipPercentageBtnAll.forEach((btn) => {
//     btn.addEventListener("click", function () {
//       tipPercentageBtnAll.forEach((el) => {
//         if (el.classList.contains("active")) {
//           el.classList.remove("active");
//         } else if (el === btn) {
//           el.classList.add("active");
//         }
//       });

//       // Move the console.log statement inside the callback
//       console.log(el.value);
//       tip = el.value;
//     });
//   });
// }

calculate.addEventListener("click", () => {
  findTip();
});

findTip();
