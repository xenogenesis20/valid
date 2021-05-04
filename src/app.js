import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function displayError(msg) {
  let errorMsg = document.querySelector("#errorMsg");
  errorMsg.classList.contains("d-none") && errorMsg.classList.toggle("d-block");
  errorMsg.innerHTML += `<p>${msg}</p>`;
}

const submitForm = e => {
  e.preventDefault();

  let errorMsg = document.querySelector("#errorMsg");
  !errorMsg.classList.contains("d-none") && errorMsg.classList.toggle("d-none");
  errorMsg.innerHTML += "";

  document
    .querySelectorAll("input")
    .forEach(elem => elem.classList.remove("is-invalid"));

  let inputcard = document.querySelector("#inputcard");
  let ccv = document.querySelector("#CCV");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let address = document.querySelector("#inputAddress2");
  let city = document.querySelector("#inputCity");
  let state = document.querySelector("#inputState");
  let zip = document.querySelector("#inputZip");
  let message = document.querySelector("#message");
  let cardDiv = document.querySelector("#cardDiv");
  let theMsg = document.createTextNode("Error");

  if (inputcard.value.length != 16) {
    displayError("Card has to be 16 digits.");
    inputcard.classList.add("is-invalid");
    cardDiv.appendChild(theMsg);
  }
  if (ccv.value.length != 3) {
    displayError("CCV must be 3 digits.");
    ccv.classList.add("is-invalid");
  }
  if (firstName.value.length < 2) {
    displayError("name must be at least 2 characters.");
    firstName.classList.add("is-invalid");
  }
  if (lastName.value.length < 2) {
    displayError("last name must be at least 2 characters.");
    lastName.classList.add("is-invalid");
  }
  if (address.value.length < 2) {
    displayError("address must be at least 2 characters.");
    address.classList.add("is-invalid");
  }
  if (city.value.length < 2) {
    displayError("city must be at least 2 characters.");
    city.classList.add("is-invalid");
  }
  if (state.value == "Choose...") {
    displayError("state must be selected.");
    state.classList.add("is-invalid");
  }
  if (zip.value.length < 2) {
    displayError("zip must be at least 2 characters.");
    zip.classList.add("is-invalid");
  }
  if (message.value.length < 1) {
    displayError("message cannot be blank.");
    message.classList.add("is-invalid");
  }
};

document.querySelector("#submitBtn").addEventListener("click", submitForm);
