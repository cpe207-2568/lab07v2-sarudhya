// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passInput = document.querySelector("#password-input");
const confirmPass = document.querySelector("#password-confirm-input")
// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passInput.onkeyup = () => {
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
};

confirmPass.onkeyup = () => {
  confirmPass.classList.remove("is-valid");
  confirmPass.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassOK = false;
  isconfirmPass = false;

  // validate first name
  if (firstNameInput.value == "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name

   if (lastNameInput.value == "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }else{
    emailInput.classList.add("is-invalid");
  }

  // validate password
  if (passInput.value.length >= 6) {
    passInput.classList.add("is-valid");
    isPassOK = true;
  } else {
    passInput.classList.add("is-invalid");
  }


  // validate confirm password
  if( confirmPass.value == passInput.value && confirmPass.value !== "" && confirmPass.value.length >= 6){
    confirmPass.classList.add("is-valid");
    isconfirmPass = true;
  } else {
    confirmPass.classList.add("is-invalid")
  }


  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOK && isconfirmPass){
     alert("Registered Successfully");
  }  
};

// add callback function for Reset button.

resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passInput.value = "";
  confirmPass.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passInput.classList.remove("is-valid");
  passInput.classList.remove("is-invalid");
  confirmPass.classList.remove("is-valid");
  confirmPass.classList.remove("is-invalid");
}

