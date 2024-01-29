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
let selectValue6x = {};
let filterValue5 = "";
let filterValue6x = "";
let selectValue6 = {};
let filterValue6 = "";
let selectValue8 = {};
let filterValue8 = "";
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
  let value1 = `Quelle est votre situation? Answer:${filterValue1}`;
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
}
// Step 3 ######################################################################################
function storeSelectedValue3() {
  let slider = document.getElementById("id-7385afa6-input");

  // Get the current value of the slider
  let storedValue = slider.value;
  selectValue3 = storedValue;

  // Do something with the value, for example, log it
  let value1 = `Année de construction de votre propriété ? Answer:${selectValue3}`;
}

function storeSelectedValue4() {
  let slider = document.getElementById("id-7385afa7-input");

  // Get the current value of the slider
  let storedValue = slider.value;
  selectValue4 = storedValue;

  // Do something with the value, for example, log it
  let value1 = `Surface en m² de votre propriété ? Answer:${selectValue4}`;
}
let showInput = () => {
  let inputBlock = document.getElementById("input-015 f1822-container");
  inputBlock.style.display = "block";
};
let hideInput = () => {
  let inputBlock = document.getElementById("input-015 f1822-container");
  inputBlock.style.display = "none";
};
let showInput2 = () => {
  let inputBlock = document.getElementById("input-0153 f1822-container3");
  inputBlock.style.display = "block";
};
let hideInput2 = () => {
  let inputBlock = document.getElementById("input-0153 f1822-container3");
  inputBlock.style.display = "none";
};

function storeSelectedValue5() {
  document
    .querySelectorAll(".survey-option3:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue5[questionId] = radioButton.value;
    });
  let input = document.getElementById("input-016f1829");
  console.log(selectValue5);
  if (Object.values(selectValue5)[0] === "Oui") {
    filterValue5 = `Oui, ${input.value}`;
    console.log("filterValue5: ", filterValue5);
    return;
  }
  filterValue5 = Object.values(selectValue5)[0];
  console.log("filterValue5: ", filterValue5);
  let value1 = `Au cours des 5 dernières années, avez-vous réalisé des travaux énergétiques avec les aides de l’état ?? Answer:${filterValue5}`;
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
}

function storeSelectedValue6x() {
  document
    .querySelectorAll(".survey-option5:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue6x[questionId] = radioButton.value;
    });
  let input = document.getElementById("input-016f1830");
  console.log(selectValue6x);
  if (Object.values(selectValue6x)[0] === "Autre") {
    filterValue6x = `Autre, ${input.value}`;
    console.log("filterValue6x: ", filterValue6x);
    return;
  }
  filterValue6x = Object.values(selectValue6x)[0];
  console.log("filterValue6x: ", filterValue6x);
  let value1 = `Au cours des 5 dernières années, avez-vous réalisé des travaux énergétiques avec les aides de l’état ?? Answer:${filterValue5}`;
}

function storeSelectedValue8() {
  document
    .querySelectorAll(".survey-option6:checked")
    .forEach((radioButton) => {
      const questionId = radioButton.name;
      selectValue8[questionId] = radioButton.value;
    });

  filterValue8 = Object.values(selectValue8)[0];
  let value1 = `Avez vous un sous-sol ? ? Answer:${filterValue8}`;
}

// Raw#######################################
function updateDestinationAndButtonClick() {
  //   Get the selected input value (you might need to adjust this based on your actual structure)
  const selectedValue = document.querySelector(
    'input[name="id-e67b6dea"]:checked'
  );
  let destination;
  if (selectedValue) {
    destination = selectedValue.getAttribute("data-destination");
  }
  // Set the data-destination attribute based on the selected value or use a default value

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
  let value1 = `Combien de radiateurs électriques avez-vous ? Answer:${selectValue10}`;
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
  let value1 = `Quel type de combles avez vous ? Answer:${filterValue11}`;
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
}
// Step 13 ######################################################################################
function storeSelectedValue13() {
  let zip = document.getElementById("input-016f1822").value;
  selectValue13 = zip;
  let value1 = `Quel est votre département ? Answer:${selectValue13}`;
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
        Value7: filterValue6x,
        Value8: filterValue8,
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
};
//
function updateDestinationAndButtonClick2() {
  //   Get the selected input value (you might need to adjust this based on your actual structure)
  const selectedValue = document.querySelector(
    'input[name="id-279f0ba2"]:checked'
  );
  // Set the data-destination attribute based on the selected value or use a default value
  let destination;
  if (selectedValue) {
    destination = selectedValue.getAttribute("data-destination");
  }
  if (destination === "id-393ac0dc") {
    window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
      this,
      "next",
      `${destination}`,
      `{"containerClass":"inner-narrow","destination":"${destination}","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"next","contentClass":"align-center","paddingTop":20,"id":"id-cc167b83","class":"continue&amp;nbsp;medium"}`
    );

    storeSelectedValue2();
    return;
  }
  if (destination === "screen-eb23bd67") {
    window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
      this,
      "go",
      `${destination}`,
      `{"containerClass":"inner-narrow","destination":"${destination}","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"go","contentClass":"align-center","paddingTop":20,"id":"id-68f3ab44","class":"continue&amp;nbsp;medium"}`
    );

    storeSelectedValue2();
    return;
  }
  window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
    this,
    "next",
    `${destination}`,
    `{"containerClass":"inner-narrow","destination":"${destination}","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"next","contentClass":"align-center","paddingTop":20,"id":"id-cc167b83","class":"continue&amp;nbsp;medium"}`
  );
}
function updateDestinationAndButtonClick3() {
  //   Get the selected input value (you might need to adjust this based on your actual structure)
  const selectedValue = document.querySelector(
    'input[name="mc-e7f3900e"]:checked'
  );
  // Set the data-destination attribute based on the selected value or use a default value
  let destination;
  if (selectedValue) {
    destination = selectedValue.getAttribute("data-destination");
  }
  if (destination === "next") {
    window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
      this,
      `${destination}`,
      "screen-6414b602",
      '{"containerClass":"inner-narrow","destination":"screen-6414b602","nextAction":"next","label":"Suivant","type":"generic-button","paddingBottom":20,"name":"button-continue","contentClass":"align-center","action":"next","paddingTop":20,"id":"id-cae3c155","class":"continue&amp;nbsp;medium"}'
    );

    storeSelectedValue1();
    return;
  }
  if (destination === "screen-eb23bd67") {
    window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
      this,
      "go",
      `${destination}`,
      `{"containerClass":"inner-narrow","destination":"${destination}","label":"Suivant","nextAction":"next","type":"generic-button","paddingBottom":20,"name":"button-continue","action":"go","contentClass":"align-center","paddingTop":20,"id":"id-68f3ab44","class":"continue&amp;nbsp;medium"}`
    );

    storeSelectedValue1();
    return;
  }
  window.heyflow["r_novation-global-2023---facebook-2"].buttonClick(
    this,
    `${destination}`,
    "screen-6414b602",
    '{"containerClass":"inner-narrow","destination":"screen-6414b602","nextAction":"next","label":"Suivant","type":"generic-button","paddingBottom":20,"name":"button-continue","contentClass":"align-center","action":"next","paddingTop":20,"id":"id-cae3c155","class":"continue&amp;nbsp;medium"}'
  );

  //
}
//

const selectedChoices = [];

function handleCheckboxClick(event) {
  const selectedCheckbox = event.target;
  const isChecked = selectedCheckbox.checked;

  // If the checkbox is checked, add it to the selected choices
  if (isChecked) {
    selectedChoices.push(selectedCheckbox.value);

    // Disable other checkboxes if there are already 2 selected choices
    if (selectedChoices.length === 2) {
      disableUnselectedCheckboxes();
    }
  } else {
    // If the checkbox is unchecked, remove it from the selected choices
    const index = selectedChoices.indexOf(selectedCheckbox.value);
    if (index !== -1) {
      selectedChoices.splice(index, 1);

      // Enable all checkboxes
      enableAllCheckboxes();
    }
  }
}

function disableUnselectedCheckboxes() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="id-e67b6dea"]'
  );
  checkboxes.forEach((checkbox) => {
    if (!selectedChoices.includes(checkbox.value)) {
      checkbox.disabled = true;
      checkbox.parentElement.parentElement.parentElement.classList.add(
        "disableobe"
      );
    }
  });
}

function enableAllCheckboxes() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="id-e67b6dea"]'
  );
  checkboxes.forEach((checkbox) => {
    checkbox.disabled = false;
    checkbox.parentElement.parentElement.parentElement.classList.remove(
      "disableobe"
    );
  });
}

function setParentOpacity(element, opacity) {
  // Find the parent with class 'multiple-choice-option'
  let parent = element.closest(".multiple-choice-option");

  // Set the opacity of the parent
  if (parent) {
    parent.classList.add("disableobe");
  }
}

function clearSelectedChoices() {
  // Get all checkboxes in the question
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][name="id-e67b6dea"]'
  );

  // Uncheck all checkboxes and reset opacity
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.disabled = false;

    checkbox.parentElement.parentElement.parentElement.classList.remove(
      "disableobe"
    );
  });

  // Clear the selected choices array
  selectedChoices.length = 0;
}
