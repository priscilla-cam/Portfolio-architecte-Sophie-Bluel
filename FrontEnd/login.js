// Récupération des informations d'authentification à partir du FORM de LOGIN.HTML
const formInfos = document.querySelector("form");

// Fonction d'authentification à partir des informations de l'API

formInfos.addEventListener("submit", async function (event) {
    event.preventDefault();
    // Création de l'objet "userInfos"
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const userInfos = { email, password };

    // Envoi de ces informations sur l'API "LOGIN"
    const authentificationInfos = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfos)
    });

    // Récupération de la réponse et traduction
    const authentificationResponse = await authentificationInfos.json();
    // Stockage du TOKEN du User identifié et de l'état de l'authentification ---------
    const authentificationToken = authentificationResponse.token;
    const authentificationState = authentificationInfos.ok;
    // --------------------------------------------------------------------------------

    // Retour conditionnel en fonction de l'authentification et stockage des données dans le "sessionStorage".
    if (authentificationState === true) {
        sessionStorage.setItem("authentificationToken", authentificationToken);
        sessionStorage.setItem("authentificationState", authentificationState);
        window.location.replace("index.html");
    } else {
        sessionStorage.setItem("authentificationState", authentificationState);
        const wrongUserNotification = document.querySelector(".wrong-user-notification");
        wrongUserNotification.innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    };
});



//const monToken = await localStorage.getItem('Tokens');
//console.log("monToken", monToken);

//if (monToken != null) {
  //  document.querySelector('#loginUser > #login').textContent = "Sophie"; //on remplace login par le nom de l'utilisateur
    //document.getElementById('login').href = "#"; //on supprimer le lien de la page de connection
    //document.getElementById('logout').style.display = "flex"; //le bouton deconnexion
    //document.getElementById('sect-header').style.display = "flex"; //la barre du mode edition
    //document.getElementById('editor-photo').style.display = "flex"; //Modifier la photo profil
    //document.getElementById('editor-parag').style.display = "flex"; //Modifier le paragraphe cote phote
    //document.getElementById('spamBtnEdito').style.display = "flex"; //Modifier le projet

    //deconnected();
    //creactModal();
//}
//else if (monToken == null) {
    //baliseNone();
//}

//Permet de mettre certaine balise en display none
//function baliseNone() {
  //  document.getElementById('login').href = "login.html";
  //  document.getElementById('logout').style.display = "none"; //le bouton deconnexion

    //document.querySelector("#sect-header").innerHTML = "";
    //document.getElementById('sect-header').style.display = "none"; //la barre du mode edition

    //document.querySelector("#editor-photo").innerHTML = "";
    //document.getElementById('editor-photo').style.display = "none"; //Modifier la photo profil

    //document.querySelector("#editor-parag").innerHTML = "";
    //document.getElementById('editor-parag').style.display = "none"; //Modifier le paragraphe cote phote

    //document.querySelector("#spamBtnEdito").innerHTML = "";
    //document.getElementById('spamBtnEdito').style.display = "none"; //Modifier le projet

    //document.querySelector("#fenetreModalgallery").innerHTML = "";
    //document.getElementById('fenetreModalgallery').style.display = "none"; //Pour mettre la partie modal
//}



//function deconnected() {
  //  const logoutUser = document.querySelector("#logout");

    //if (authentificationToken != null) {
        //On ecoute le bouton
      //  logoutUser.addEventListener("click", function (e) {
        //    e.preventDefault();

            //supprimer la cle token
          //  localStorage.removeItem('Tokens');
            //alert("Vous allez être déconnecter")
            //location.href = "http://127.0.0.1:5500/FrontEnd/index.html#portfolio";
            //window.location.replace("/index.html"); //rester sur le site

            //Actualise la page
            //document.querySelector("#loginUser").innerHTML = "";
            //document.querySelector('#loginUser').textContent = "Login";
            //document.getElementById('logout').style.display = "none";
            //baliseNone();
        //});
    //}
//}
