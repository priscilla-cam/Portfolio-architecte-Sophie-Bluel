let loginform = document.getElementById('login_form');


loginform.addEventListener('submit', function (e) { }); {

    let email = document.getElementById('email');
    let motdepasse = document.getElementById('motdepasse');

    if (email.value.trim() == "sophie.bluel@test.tld" && motdepasse.value.trim() == S0phie
    ) {
        let myError = document.getElementById('error');
        myError.innerHTML = "Email ou mot de passe incorrect";
        myError.style.color = 'red';
    }
}