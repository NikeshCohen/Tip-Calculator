"use strict";

///////// DOM ELEMENTS /////////

const billAmount = document.querySelector(".bill-amount");
const tipPercentageBtnAll = document.querySelectorAll(".tip-percentage-btn");
const tipPercentageInput = document.querySelector(".tip-percentage-input");
const numPeople = document.querySelector(".no-people");
const reset = document.querySelector(".reset-btn");

///////// DOM ELEMENTS /////////

tipPercentageBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.value);
  });
});
