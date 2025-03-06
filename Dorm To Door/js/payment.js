document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll("input[name='TicketForm']");
  const radio = document.querySelectorAll("input[type='radio']");
  const submitButton = document.querySelector(".form-control[type='submit']");
  const link = document.querySelector("form");
  const price = document.querySelector("h6");
  const number = document.querySelector("input[type='number']");
  const text = document.getElementById("text");

  // Define payment links for each option
  const paymentLinks = {
    flexRadioDefault1: "https://buy.stripe.com/test_00gg0Pdvt5hde40eUY",
    flexRadioDefault2: "https://book.stripe.com/test_fZeg0P9fdcJFf84aEF",
    flexRadioDefault3: "https://book.stripe.com/test_cN2eWL3UTcJFf84288",
    flexRadioDefault4: "https://book.stripe.com/test_aEUcODcrp7pl2li4gl",
    flexRadio2person: "https://buy.stripe.com/test_3csaGv3UTbFB3pm6or",
    flexRadio4person: "https://buy.stripe.com/test_5kAcODezxgZVgc8002",
  };

  // Function to update the button link
  function updateLink() {
    const selectedOption = document.querySelector(
      "input[name='TicketForm']:checked"
    );

    text.innerHTML = "";
    const selectedRadio = selectedOption.closest(".form-check");

    //   reset border colors
    document
      .querySelectorAll(".form-check")
      .forEach((ele) => (ele.style.border = ""));

    if (selectedOption.id === "flexRadioDefault1") {
      number.required = true;
      number.disabled = false;
      number.value = 1;

      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";

      if (number.value == 1) {
        price.innerHTML = "Price: $175/month";

        submitButton.onclick = function () {
          window.location.href = paymentLinks[selectedOption.id];
          link.action = paymentLinks[selectedOption.id];
        };
      }
      if (number.value == 2) {
        price.innerHTML = "Price: $330/month";
        submitButton.onclick = function () {
          window.location.href =
            "https://buy.stripe.com/test_3csaGv3UTbFB3pm6or";
          link.action = "https://buy.stripe.com/test_3csaGv3UTbFB3pm6or";
        };
      }
      if (number.value == 3) {
        text.innerHTML = "Please select 1, 2, or 4 people.";
        text.style.color = "red";
        price.innerHTML = "Price: ";
      }

      if (number.value == 4) {
        price.innerHTML = "Price: $600/month";
        submitButton.onclick = function () {
          window.location.href =
            "https://buy.stripe.com/test_5kAcODezxgZVgc8002";
          link.action = "https://buy.stripe.com/test_5kAcODezxgZVgc8002";
        };
      }
      submitButton.innerHTML = "Continue to Payment";
    }
    if (selectedOption.id === "flexRadioDefault2") {
      number.required = false;
      number.disabled = true;
      number.value = 1;
      price.innerHTML = "Price: $200";

      submitButton.innerHTML = "Continue to Payment";
      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";

      submitButton.onclick = function () {
        window.location.href = paymentLinks[selectedOption.id];
        link.action = paymentLinks[selectedOption.id];
      };
    }
    if (selectedOption.id === "flexRadioDefault3") {
      number.required = false;
      number.disabled = true;
      number.value = 1;
      submitButton.innerHTML = "Continue to Payment";
      text.style.color = "red";

      price.innerHTML = "Price: $175";
      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";

      submitButton.onclick = function () {
        window.location.href = paymentLinks[selectedOption.id];
        link.action = paymentLinks[selectedOption.id];
      };
    }
    if (selectedOption.id === "flexRadioDefault4") {
      number.required = false;
      number.disabled = true;
      number.value = 1;

      price.innerHTML = "Please Contact Us for Pricing!";
      submitButton.innerHTML = "Schedule Consultation";

      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";

      submitButton.onclick = function () {
        window.location.href = paymentLinks[selectedOption.id];
        link.action = paymentLinks[selectedOption.id];
      };
    }
    /*
        if (selectedOption) {
            submitButton.onclick = function () {
                window.location.href = paymentLinks[selectedOption.id];
            };
        }
        */
  }

  // Add event listeners to all radio buttons
  options.forEach((option) => {
    option.addEventListener("change", updateLink);
    number.addEventListener("change", updateLink);
  });
});
