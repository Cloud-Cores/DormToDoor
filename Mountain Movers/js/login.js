let formData = [];

function submitForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("login-form-email");
  const passwordInput = document.getElementById("login-form-password");
  //   const formError = document.getElementById("form-error");

  if (!emailInput.value || !passwordInput.value) {
    emailInput.classList.add("input-error");
    passwordInput.classList.add("input-error");
    // formError.textContent = "All Fields are Necessary!";
  } else {
    formData.push({
      email: emailInput.value,
      password: passwordInput.value,
      time: Date.now(),
    });
    console.log(formData);
    emailInput.value = "";
    passwordInput.value = "";
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
  }
}
