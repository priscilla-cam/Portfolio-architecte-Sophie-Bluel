// Fonction pour récupérer les informations d'authentification à partir du "sessionStorage" et test pour appeler la fonction "editModeActivation" si authentifié.
export function editMode() {
    const authentificationState = sessionStorage.getItem("authentificationState");

    if (authentificationState === "true") {
        editModeActivation("flex");
        document.getElementById('loginn').style.display = "none";
    } else {
        editModeActivation("none");
    }
};

// Fonction d'actualisation de la page INDEX.HTML en "MODE EDITION" (si authentifié).
function editModeActivation(state) {
    const editModeElement = document.querySelectorAll(".edit-mode");

    for (let i = 0; i < editModeElement.length; i++) {
        editModeElement[i].style.display = state;
    }
};

//Fonction deconnexion
const logoutButton = document.querySelector("#logout");


logoutButton.addEventListener("click", function () {
    const authentificationToken = sessionStorage.getItem("authentificationToken");
    const authentificationState = sessionStorage.getItem("authentificationState");

    sessionStorage.removeItem("authentificationToken");
    sessionStorage.removeItem("authentificationState");
    editModeActivation("none");
    document.getElementById('loginn').style.display = "flex";

});




