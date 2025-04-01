document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll("input[name='TicketForm']");
  const radio = document.querySelectorAll("input[type='radio']");
  const submitButton = document.querySelector(".form-control[type='submit']");
  const link = document.querySelector("form");
  const price = document.querySelector("h6");
  const number = document.querySelector("input[type='number']");
  const text = document.getElementById("text");
  const serviceOptions = document.querySelectorAll("input[name='TicketForm']");
  const locationDropdown = document.getElementById("ticket-form-select");
  const dropdown = document.getElementById("ticket-form-facility");
  const selectedService = document.querySelector("input[name='TicketForm']:checked");



  // Define payment links for each option
  const paymentLinks = {
    flexRadioDefault1: "https://app-na2.hubspot.com/payments/ty2Nh6jZW6j4?referrer=PAYMENT_LINK",
    flexRadioDefault2: "https://app-na2.hubspot.com/payments/GTFP47txyK?referrer=PAYMENT_LINK",
    flexRadioDefault3: "https://app-na2.hubspot.com/payments/TwmtgRqpCJxnp?referrer=PAYMENT_LINK",
    flexRadioDefault4: "https://meetings-na2.hubspot.com/skyler-mott",
  };


  const usStates = {
    "PA/NJ": ["PA", "NJ"],

    "East Coast": [
        "CT", "DE", "FL", "GA", "ME", "MD", "MA", "NH", "NY", "NC", "RI", "SC", "VA", "VT", "WV",
        "AL", "MS", "TN"
    ],

    "Midwest": [
        "IL", "IN", "IA", "KS", "KY", "MI", "MN", "MO", "NE", "ND", "OH", "SD", "WI",
        "AR", "CO", "LA", "MT", "OK", "TX", "WY"
    ],

    "West Coast": [
        "CA", "OR", "WA",
        "AK", "AZ", "HI", "ID", "NV", "NM", "UT"
    ],
    "International": ["International"]
  };


  const allStates = Object.values(usStates).flat();

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
      locationDropdown.disabled = true;
      locationDropdown.hidden = true;
      dropdown.hidden = true;
      dropdown.disabled = true;
      price.innerHTML = "Price: ";
      if (number.value == null || number.value == 0) {
        number.placeholder  = "Number of people (1, 2, 3, or 4)";
      }

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
            "https://app-na2.hubspot.com/payments/RbyHPvYXZxc9pF?referrer=PAYMENT_LINK";
          link.action = "https://app-na2.hubspot.com/payments/RbyHPvYXZxc9pF?referrer=PAYMENT_LINK";
        };
      }
      if (number.value == 3) {
        /*
        text.innerHTML = "Please select 1, 2, or 4 people.";
        text.style.color = "red";
        */
        price.innerHTML = "Price: $465/month";
        submitButton.onclick = function () {
          window.location.href = "https://app-na2.hubspot.com/payments/YkxcQKpzyxKk?referrer=PAYMENT_LINK";
          link.action = "https://app-na2.hubspot.com/payments/YkxcQKpzyxKk?referrer=PAYMENT_LINK";
        };
      }

      if (number.value == 4) {
        price.innerHTML = "Price: $600/month (Best Value!)";
        submitButton.onclick = function () {
          window.location.href =
            "https://app-na2.hubspot.com/payments/9p2CTTr62JWxKqDG?referrer=PAYMENT_LINK";
          link.action = "https://app-na2.hubspot.com/payments/9p2CTTr62JWxKqDG?referrer=PAYMENT_LINK";
        };
      }
      submitButton.innerHTML = "Continue to Payment";
    }
    if (selectedOption.id === "flexRadioDefault2") {
      number.required = false;
      number.disabled = true;
      //number.value = 1;
      number.value = null;
      number.placeholder = "Number of People";
      price.innerHTML = "Price: ";
      text.innerHTML = "";
      locationDropdown.hidden = true;
      dropdown.hidden = false;
      dropdown.disabled = false;
      dropdown.required = true;
      submitButton.onclick = function () {
        window.location.href = "";
        link.action = "";
      };
      /*
      if (locationDropdown.disabled = true){
        locationDropdown.disabled = false;
        locationDropdown.innerHTML = `<option value="default" hidden>Location</option><option value="on-campus">On-Campus Facility</option> <option value="off-campus">Off-Campus Facility</option>`; // Reset options

      }
      */


      console.log(locationDropdown.value);
      if (dropdown.value === "On-Campus Facility") {
        price.innerHTML = "Price: $175";

        submitButton.onclick = function () {
            window.location.href = "https://app-na2.hubspot.com/payments/GhNqNqhm7rC?referrer=PAYMENT_LINK";
            link.action = "https://app-na2.hubspot.com/payments/GhNqNqhm7rC?referrer=PAYMENT_LINK";
          };
      }
      if (dropdown.value === "Off-Campus Facility") {
        price.innerHTML = "Price: $200";

        submitButton.onclick = function () {
          window.location.href = paymentLinks[selectedOption.id];
          link.action = paymentLinks[selectedOption.id];
        };
      }
      

      submitButton.innerHTML = "Continue to Payment";
      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";

      
    }
    if (selectedOption.id === "flexRadioDefault3") {
      number.required = false;
      number.disabled = true;
      number.value = null;
      number.placeholder = "Number of People";
      locationDropdown.disabled = false;
      locationDropdown.hidden = false;
      locationDropdown.required = true;
      
      dropdown.hidden = true;
      dropdown.disabled = true;
      submitButton.innerHTML = "Continue to Payment";
      text.style.color = "red";
      text.innerHTML = "";
      price.innerHTML = "Price: ";
      submitButton.onclick = function () {
        window.location.href = "";
        link.action = "";
      };
      /*
      // Clear and repopulate the dropdown
      locationDropdown.innerHTML = `<option value="" hidden>Select </option>`; 
    
      for (const state of allStates) {
        locationDropdown.innerHTML += `<option value="${state}">${state}</option>`;
      }
      */
    
        const selectedLocation = locationDropdown.value;
        console.log(selectedLocation);
    
        for (let region in usStates) {
          if (usStates[region].includes(selectedLocation)) {
            if (region === "PA/NJ") {
              price.innerHTML = "Price: $75";
              submitButton.onclick = function () {
                window.location.href = paymentLinks[selectedOption.id];
                link.action = paymentLinks[selectedOption.id];
              };
            } else if (region === "East Coast") {
              price.innerHTML = "Price: $100";
              submitButton.onclick = function () {
                window.location.href = "https://app-na2.hubspot.com/payments/t4knTrxcNsVxFrFx?referrer=PAYMENT_LINK";
                link.action = "https://app-na2.hubspot.com/payments/t4knTrxcNsVxFrFx?referrer=PAYMENT_LINK";
              };
            } else if (region === "Midwest") {
              price.innerHTML = "Price: $125";
              submitButton.onclick = function () {
                window.location.href = "https://app-na2.hubspot.com/payments/PCnkFQzH9mZFbrQ?referrer=PAYMENT_LINK";
                link.action = "https://app-na2.hubspot.com/payments/PCnkFQzH9mZFbrQ?referrer=PAYMENT_LINK";
              };
            } else if (region === "West Coast") {
              price.innerHTML = "Price: $145";
              submitButton.onclick = function () {
                window.location.href = "https://app-na2.hubspot.com/payments/cpgfHPPcjkr?referrer=PAYMENT_LINK";
                link.action = "https://app-na2.hubspot.com/payments/cpgfHPPcjkr?referrer=PAYMENT_LINK";
              };
            } else if (region === "International") {
              price.innerHTML = "Please Contact Us for Pricing!";
              submitButton.innerHTML = "Schedule Consultation";
              submitButton.onclick = function () {
                window.location.href = "https://meetings-na2.hubspot.com/skyler-mott";
                link.action = "https://meetings-na2.hubspot.com/skyler-mott";
              };
            }
          }
        }
      
    
      selectedRadio.style.border = "2px solid rgb(15, 13, 13)";
    }
    if (selectedOption.id === "flexRadioDefault4") {
      number.required = false;
      number.disabled = true;
      number.value = null;
      number.placeholder = "Number of People";
      locationDropdown.disabled = true;
      locationDropdown.hidden = true;
      dropdown.hidden = true;
      dropdown.disabled = true;

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

  locationDropdown.addEventListener("change", updateLink);
  dropdown.addEventListener("change", updateLink);

  // Add event listeners to all radio buttons
  options.forEach((option) => {
    option.addEventListener("change", updateLink);
    number.addEventListener("change", updateLink);    
  });
});
