const email = document.querySelector(".email")
const motdepasse = document.querySelector(".motdepasse")
const URL = "indexmodif.html";
const a = document.createElement('a');
const test = document.querySelector('#test')

test.addEventListener("click", Connexion())

function Connexion() {

    if ((login_form.email.value == "sophie.bluel@test.tld") && (login_form.motdepasse.value == "S0phie")) {
        link(URL);
    }

    else {
        alert("Email ou Mot de passe incorrect");
        console.log("E-mail ou Mot de passe incorrect");
    }
}
