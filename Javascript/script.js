"use strict";

///////// DOM ELEMENTS /////////

const billAmount = document.querySelector(".bill-amount");
const tipPercentageBtnAll = document.querySelectorAll(".tip-percentage-btn");
const tipPercentageInput = document.querySelector(".tip-percentage-input");
const numPeople = document.querySelector(".no-people");
const calculate = document.querySelector(".calculator-btn");

const tipAmount = document.querySelector(".tip-per-person-amount");
const totalAmount = document.querySelector(".total-bill-amount");
const reset = document.querySelector(".reset-btn");

const errorText = document.querySelectorAll(".error-text");

///////// VARIABLES /////////

let bill;
let tipPercentage;
let people;

let tip;
let tipPerPerson;
let totalPerPerson;

///////// FUNCTIONS /////////

/// Find Tip Value

const findTip = () => {
  tipPercentageBtnAll.forEach((btn) => {
    if (btn.classList.contains("active")) {
      tipPercentage = btn.value;
    }
  });

  return tipPercentage;
};

/// Clear All Active Classes

const clearActiveClass = () => {
  tipPercentageBtnAll.forEach((btn) => {
    btn.classList.remove("active");
  });
};

/// Add Active Class

const addActiveClass = (btn) => {
  btn.classList.add("active");
};

/// Calculate Output

const calcOutput = () => {
  bill = Number(billAmount.value);
  tipPercentage = Number(findTip());
  people = Number(numPeople.value);

  tip = bill * (tipPercentage / 100);
  tipPerPerson = tip / people;

  totalPerPerson = (bill + tip) / people;

  tipAmount.innerHTML = `R${parseFloat(tipPerPerson).toFixed(2)}`;
  totalAmount.innerHTML = `R${parseFloat(totalPerPerson).toFixed(2)}`;
};

/// Reset All Calculator Values

const clearAllFlieds = () => {
  billAmount.value = "";
  numPeople.value = "";

  tipAmount.innerHTML = "R0.00";
  totalAmount.innerHTML = "R0.00";

  clearActiveClass();
};

// Remove All Errors

const removeErrors = () => {
  errorText.classList.remove("show");
};

///////// EVENT LISTENERS /////////

/// Tip Button Click Event

window.addEventListener("load", () => {
  tipPercentageBtnAll.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // Clear the active class from all buttons
      clearActiveClass();

      // Add the active class to the current target button
      addActiveClass(event.currentTarget);
    });
  });
});

/// Calculate Button Click Event

calculate.addEventListener("click", () => {
  if (billAmount.value && numPeople.value) {
    calcOutput();
  } else {
    errorText.classList.add("show");
  }
});

/// Reset Button Click Event

reset.addEventListener("click", () => {
  clearAllFlieds();
});
