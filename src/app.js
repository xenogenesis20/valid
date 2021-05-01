/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let submitBtn = document.querySelector("#submitBtn");

let form = document.querySelector("form");

let userInput = document.querySelectorAll("input");

let errorMsg = document.querySelector("#errorMsg");

function submitForm() {
  form.submit();
}

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  areAllInputsFilled();
  if (areAllInputsFilled()) {
    submitForm();
  }
});

function areAllInputsFilled() {
  let allFilled = true;

  userInput.forEach(input => {
    if (
      input.value == "" ||
      null ||
      undefined ||
      input.validity.tooShort ||
      input.validity.tooLong
    ) {
      input.reportValidity();
      errorMsg.classList = "alert alert-danger d-block";
      input.style.backgroundColor = "#f8d7da";
      allFilled = false;
      return false;
    }
  });
  return allFilled;
}
