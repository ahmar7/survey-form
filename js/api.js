let serverUrl = "https://survey-form-server-88xj.onrender.com";
// let serverUrl = "http://localhost:5000";
function adjustSliderValue(slider) {
  // Get the min and max values from the slider
  const minValue = parseFloat(slider.min);
  const maxValue = parseFloat(slider.max);

  // Ensure the value is within the valid range
  let adjustedValue = parseFloat(slider.value);
  adjustedValue = Math.min(Math.max(adjustedValue, minValue), maxValue);

  // Update the slider value
  slider.value = adjustedValue;
}

// #############
let selectValue1 = {};
let filterValue1 = "";

let selectValue2 = {};
let filterValue2 = "";
let selectValue3 = "";
let selectValue4 = "";
let selectValue5 = {};
let filterValue5 = "";
let selectValue6 = {};
let filterValue6 = "";
let selectValue7 = {};
let filterValue7 = "";
let selectValue8 = {};
let filterValue8 = "";
let selectValue9 = {};
let filterValue9 = "";
let selectValue10 = "";
let selectValue11 = {};
let filterValue11 = "";
let selectValue12 = {};
let filterValue12 = "";
let selectValue13 = "";
// ###################################################################################

// Step 1 ######################################################################################
function storeSelectedValue1() {
  document.querySelectorAll(".survey-option:checked").forEach((radioButton) => {
    const questionId = radioButton.name;
    selectValue1[questionId] = radioButton.value;
  });

  filterValue1 = Object.values(selectValue1)[0];
  console.log("filterValue1: ", filterValue1);
  let value1 = `Quelle est votre situation? Answer:${filterValue1}`;
  console.log("Selected values:", value1);
}
// Step 2 ######################################################################################
function storeSelectedValue2() {
  document
    .querySelectorAll(".survey-option2:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue2[questionId] = radioButton.value;
    });

  filterValue2 = Object.values(selectValue2)[0];
  let value1 = `Votre type de propriété ? Answer:${filterValue2}`;
  console.log("Selected values:", value1);
}
// Step 3 ######################################################################################
function storeSelectedValue3() {
  let slider = document.getElementById("id-7385afa6-input");

  // Get the current value of the slider
  let storedValue = slider.value;
  selectValue3 = storedValue;

  // Do something with the value, for example, log it
  console.log("Current Slider Value:", selectValue3);
  let value1 = `Année de construction de votre propriété ? Answer:${selectValue3}`;
  console.log("Selected values:", value1);
}

function storeSelectedValue4() {
  let slider = document.getElementById("id-7385afa7-input");

  // Get the current value of the slider
  let storedValue = slider.value;
  selectValue4 = storedValue;

  // Do something with the value, for example, log it
  console.log("Current Slider Value:", selectValue4);
  let value1 = `Surface en m² de votre propriété ? Answer:${selectValue4}`;
  console.log("Selected values:", value1);
}

function storeSelectedValue5() {
  document
    .querySelectorAll(".survey-option3:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue5[questionId] = radioButton.value;
    });

  filterValue5 = Object.values(selectValue5)[0];
  let value1 = `Au cours des 5 dernières années, avez-vous réalisé des travaux de rénovation énergétique (isolation, PAC, ballon thermo) avec le bénéfice des aides de l'État ? Answer:${filterValue5}`;
  console.log("Selected values:", value1);
}
function storeSelectedValue6() {
  document
    .querySelectorAll(".survey-option4:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue6[questionId] = radioButton.value;
    });

  filterValue6 = Object.values(selectValue6)[0];
  let value1 = `Quel est votre système de chauffage principal ? Answer:${filterValue6}`;
  console.log("Selected values:", value1);
}
function storeSelectedValue7() {
  document
    .querySelectorAll(".survey-option5:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue7[questionId] = radioButton.value;
    });

  filterValue7 = Object.values(selectValue7)[0];
  let value1 = `Votre chaudière fait-elle le chauffage et l'eau chaude ? Answer:${filterValue7}`;
  console.log("Selected values:", value1);
}
function storeSelectedValue8() {
  document
    .querySelectorAll(".survey-option6:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue8[questionId] = radioButton.value;
    });

  filterValue8 = Object.values(selectValue8)[0];
  let value1 = `Avez-vous un système de chauffe-eau ? Answer:${filterValue8}`;
  console.log("Selected values:", value1);
}
function storeSelectedValue9() {
  document
    .querySelectorAll(".survey-option7:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue9[questionId] = radioButton.value;
    });

  filterValue9 = Object.values(selectValue9)[0];
  let value1 = `Avez-vous isolé ces endroits ? Answer:${filterValue9}`;
  console.log("Selected values:", value1);
}

// Raw#######################################
function updateDestinationAndButtonClick() {
  //   Get the selected input value (you might need to adjust this based on your actual structure)
  const selectedValue = document.querySelector(
    'input[name="id-e67b6dea"]:checked'
  );
  // Set the data-destination attribute based on the selected value or use a default value
  const destination = selectedValue.getAttribute("data-destination");

  // Get the button element

  window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
    this,
    "go",
    `${destination}`,
    `{"containerClass":"inner-narrow","destination":"${destination}","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"go","contentClass":"align-center","paddingTop":20,"id":"id-68f3ab44","class":"continue&amp;nbsp;medium"}`
  );

  storeSelectedValue6();
}

// Step 10 ######################################################################################
function storeSelectedValue10() {
  let slider = document.getElementById("id-7385afa9-input");

  // Get the current value of the slider

  let storedValue = slider.value;
  selectValue10 = storedValue;

  // Do something with the value, for example, log it
  console.log("Current Slider values:", selectValue10);
  let value1 = `Combien de radiateurs électriques avez-vous ? Answer:${selectValue10}`;
  console.log("Selected values:", value1);
}
// Step 11 ######################################################################################
function storeSelectedValue11() {
  document
    .querySelectorAll(".survey-option8:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue11[questionId] = radioButton.value;
    });

  filterValue11 = Object.values(selectValue11)[0];
  let value1 = `Quel est l'état de vos combles ? Answer:${filterValue11}`;
  console.log("Selected values:", value1);
}
// Step 12 ######################################################################################
function storeSelectedValue12() {
  document
    .querySelectorAll(".survey-option9:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue12[questionId] = radioButton.value;
    });

  filterValue12 = Object.values(selectValue12)[0];
  let value1 = `Comment se fait l'accès par vos combles ? Answer:${filterValue12}`;
  console.log("Selected values:", value1);
}
// Step 13 ######################################################################################
function storeSelectedValue13() {
  let zip = document.getElementById("input-016f1822").value;
  selectValue13 = zip;
  let value1 = `Quel est votre département ? Answer:${selectValue13}`;
  console.log("Selected values:", value1);
}

// Api###############################################################
// window.heyflow[&apos;r_novation-global-2023---facebook-2&apos;].buttonClick(this, &apos;submit&apos;, &apos;&apos;, &apos;{"paddingBottom":20,"containerClass":"inner-narrow","name":"button-submit","action":"submit","contentClass":"align-space-between","label":"Envoyer","nextAction":"next","paddingTop":20,"id":"button-42741dc1","type":"generic-button","class":"submit&amp;nbsp;medium"}&apos;)
let postForm = () => {
  let firstName = document.getElementById("input-bbbdc245");
  let firstNameContainer = document.getElementById("input-bbbdc245-container");
  let lastName = document.getElementById("input-b863834a");
  let lastNameContainer = document.getElementById("input-b863834a-container");
  let netErr = document.getElementById("net");
  let emailAddress = document.getElementById("input-b894aa56");
  let emailAddressContainer = document.getElementById(
    "input-b894aa56-container"
  );
  let phoneNumber = document.getElementById("input-b894aa53");
  let phoneNumberContainer = document.getElementById(
    "input-b894aa53-container"
  );
  let sendBtn = document.getElementById("button-42741dc1");
  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var result = reg.test(emailAddress.value);
  //
  netErr.style.display = "none";
  firstNameContainer.classList.remove("preview-error");

  lastNameContainer.classList.remove("preview-error");
  emailAddressContainer.classList.remove("preview-error");
  phoneNumberContainer.classList.remove("preview-error");
  sendBtn.removeAttribute("data-status", "error");

  let isValid = true;

  if (!firstName.value.trim()) {
    firstNameContainer.classList.add("preview-error");
    isValid = false;
  }

  if (!lastName.value.trim()) {
    lastNameContainer.classList.add("preview-error");
    isValid = false;
  }

  if (!emailAddress.value.trim() || !result) {
    emailAddressContainer.classList.add("preview-error");
    isValid = false;
  }

  if (!phoneNumber.value.trim()) {
    phoneNumberContainer.classList.add("preview-error");
    isValid = false;
  }

  if (isValid) {
    sendBtn.setAttribute("disabled", true);
    sendBtn.setAttribute("data-status", "loading");
    fetch(`${serverUrl}/submitSurvey`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Value1: filterValue1,
        Value2: filterValue2,
        Value3: selectValue3,
        Value4: selectValue4,
        Value5: filterValue5,
        Value6: filterValue6,
        Value7: filterValue7,
        Value8: filterValue8,
        Value9: filterValue9,
        Value10: selectValue10,
        Value11: filterValue11,
        Value12: filterValue12,
        Value13: selectValue13,
        email: emailAddress.value,
        phone: phoneNumber.value,
        firstName: firstName.value,
        lastName: lastName.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          sendBtn.setAttribute("data-status", "success");
          setTimeout(() => {
            window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
              this,
              "go",
              "screen-695e6eb2",
              `{"containerClass":"inner-narrow","destination":"screen-695e6eb2","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"go","contentClass":"align-center","paddingTop":20,"id":"id-68f3ab44","class":"continue&amp;nbsp;medium"}`
            );
          }, 1500);
          return;
        } else {
          sendBtn.removeAttribute("disabled");

          sendBtn.setAttribute("data-status", "error");
          setTimeout(() => {
            sendBtn.removeAttribute("data-status", "error");
          }, 1500);
          return;
        }
      })
      .catch((e) => {
        netErr.style.display = "block";

        sendBtn.removeAttribute("disabled");
        sendBtn.setAttribute("data-status", "error");
        setTimeout(() => {
          sendBtn.removeAttribute("data-status", "error");
        }, 1500);
      });
    return;
  }
  sendBtn.setAttribute("data-status", "error");
  setTimeout(() => {
    sendBtn.removeAttribute("data-status", "error");
  }, 1000);
  //
  // let emailform = document.getElementById("email-form");
  // let thankForm = document.getElementById("thankForm");
  // let errorBlock = document.getElementById("errorBlock");
  // let emailError = document.getElementById("emailError");
  // errorBlock.style.display = "none";
  // let EMAIL = document.getElementById("EMAIL").value;
  // let submitBtn = document.getElementById("submit-newsletter");
  // var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // var result = reg.test(EMAIL);

  // if (result === true) {
  //   submitBtn.disabled = true;
  //   submitBtn.value = "Please wait...";
  //   fetch(
  //     "https://retrodroproyaleserver.onrender.com/subscribeNewsetter",
  //     // "http://localhost:5000/subscribeNewsetter",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         email: EMAIL,
  //       }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success === true) {
  //         emailform.style.display = "none";
  //         thankForm.style.display = "block";
  //         submitBtn.value = "Subscribe";

  //         return;
  //       } else {
  //         submitBtn.disabled = false;
  //         errorBlock.style.display = "block";
  //         emailError.innerHTML =
  //           "Oops! Something went wrong while submitting the form.";
  //         submitBtn.value = "Subscribe";
  //         return;
  //       }
  //     })
  //     .catch((e) => {
  //       submitBtn.disabled = false;
  //       errorBlock.style.display = "block";
  //       emailError.innerHTML =
  //         "Oops! Something went wrong while submitting the form.";
  //       submitBtn.value = "Subscribe";
  //     });
  //   return true;
  // } else if (!EMAIL) {
  //   errorBlock.style.display = "block";
  //   emailError.innerHTML = "Please enter your email";
  //   setTimeout(() => {
  //     errorBlock.style.display = "none";
  //   }, 2000);
  //   return;
  // } else {
  //   errorBlock.style.display = "block";
  //   emailError.innerHTML = "Please enter email in correct format";
  //   setTimeout(() => {
  //     errorBlock.style.display = "none";
  //   }, 2000);
  //   return;
  // }
};
