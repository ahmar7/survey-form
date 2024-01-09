let serverUrl = "https://survey-form-server-88xj.onrender.com";
// let serverUrl = "http://localhost:5000";
let getForm = () => {
  let fetchedData = [];
  let surveyNumber = 1;
  const cardRow = document.getElementById("cardRow");
  const loader = document.getElementById("loader");
  const alertContainer = document.getElementById("alertContainer");

  // Prompt the user to enter the secret key
  const secret = prompt("Enter the secret key to continue:");

  if (!secret) {
    loader.style.display = "none"; // Hide loader
    alertContainer.innerHTML = "No secret key provided.";
    alertContainer.className = "alert alert-danger";
    alertContainer.style.display = "block";
    return;
  }

  const urlWithParams = `${serverUrl}/getAllSurveys?secret=${encodeURIComponent(
    secret
  )}`;

  // Show loader while fetching data
  loader.style.display = "block";

  fetch(urlWithParams, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = "none"; // Hide loader

      if (data.success === true) {
        fetchedData = data.allData || [];
        // Generate and display cards
        fetchedData.reverse().forEach((survey) => {
          const card = document.createElement("div");
          card.className = "col-md-12";
          card.innerHTML = `
              <div class="card"  id="${survey._id}">
                <div class="card-body">
                  <h5 class="card-title">Form ${surveyNumber}</h5>
  
                  ${
                    survey.firstName && survey.lastName
                      ? `
                    <p class="card-text question no-margin">Name: <span class="light">${survey.firstName} ${survey.lastName}</span></p>
                  `
                      : ""
                  }
  
                  ${
                    survey.email
                      ? `
                    <p class="card-text question no-margin">Email: <span class="light">${survey.email}</span></p>
                  `
                      : ""
                  }
  
                  ${
                    survey.phone
                      ? `
                    <p class="card-text question no-margin">Phone: <span class="light">${survey.phone}</span></p>
                  `
                      : ""
                  }
                  <br>
  
                  ${
                    survey.Value1
                      ? `
                    <p class="card-text question no-margin">Quelle est votre situation?</p>
                    <p class="card-text aswer">${survey.Value1}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value2
                      ? `
                    <p class="card-text question">Votre type de propriété ?</p>
                    <p class="card-text aswer">${survey.Value2}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value3
                      ? `
                    <p class="card-text question">Année de construction de votre propriété ?</p>
                    <p class="card-text aswer">${survey.Value3}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value4
                      ? `
                    <p class="card-text question">Surface en m² de votre propriété ?</p>
                    <p class="card-text aswer">${survey.Value4}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value5
                      ? `
                    <p class="card-text question">Au cours des 5 dernières années, avez-vous réalisé des travaux de rénovation énergétique (isolation,  Pompe à chaleur, ballon thermo) avec le bénéfice des aides de l'État ?</p>
                    <p class="card-text aswer">${survey.Value5}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value6
                      ? `
                    <p class="card-text question">Quel est votre système de chauffage principal ?</p>
                    <p class="card-text aswer">${survey.Value6}</p>
                  `
                      : ""
                  }
  
                  
  
                  ${
                    survey.Value8
                      ? `
                    <p class="card-text question">Avez vous un sous-sol ?</p>
                    <p class="card-text aswer">${survey.Value8}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value9
                      ? `
                    <p class="card-text question">Avez-vous isolé ces endroits ?</p>
                    <p class="card-text aswer">${survey.Value9}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value10
                      ? `
                    <p class="card-text question">Combien de radiateurs électriques avez-vous ?</p>
                    <p class="card-text aswer">${survey.Value10}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value11
                      ? `
                    <p class="card-text question">Quel type de combles avez vous ?</p>
                    <p class="card-text aswer">${survey.Value11}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value12
                      ? `
                    <p class="card-text question">Comment se fait l'accès par vos combles ?</p>
                    <p class="card-text aswer">${survey.Value12}</p>
                  `
                      : ""
                  }
  
                  ${
                    survey.Value13
                      ? `
                    <p class="card-text question">Quel est votre département ?</p>
                    <p class="card-text aswer">${survey.Value13}</p>
                  `
                      : ""
                  }
                  <br>
                  <button onclick="deleteIt(this, '${
                    survey._id
                  }')" class="btn btn-danger"> 
                  
                  
                  <span class="hide-it spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span class="after">Delete</span>
                  </button>

                </div>
              </div>
            `;
          cardRow.appendChild(card);
          surveyNumber++;
        });
      } else {
        // Display error message in HTML and show alert
        alertContainer.innerHTML = `Error: ${
          data.msg || "Error fetching data"
        }`;
        alertContainer.className = "alert alert-danger";
        alertContainer.style.display = "block";
      }
    })
    .catch((e) => {
      loader.style.display = "none"; // Hide loader
      // Display error message in HTML and show alert
      alertContainer.innerHTML =
        "Something went wrong. Please reload the page.";
      alertContainer.className = "alert alert-danger";
      alertContainer.style.display = "block";
    });
};

// Call the function
getForm();

let deleteIt = (deleteBtn, id) => {
  const cardToDelete = document.getElementById(id);

  deleteBtn.disabled = true;
  const urlWithParams = `${serverUrl}/seleteSurvey/${id}`;
  console.log("urlWithParams: ", urlWithParams);

  // Show loader while fetching data

  fetch(urlWithParams, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      // Hide loader

      if (data.success === true) {
        deleteBtn.disabled = false;
        cardToDelete.remove();
      } else {
        deleteBtn.disabled = false;

        alert(data.msg);
      }
    })
    .catch((e) => {
      deleteBtn.disabled = false;

      alert("Something went wrong, failed to delete the form");
    });
};
