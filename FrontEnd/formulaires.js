async function connectionUtilisateur(email, motDePasse) {
    const reponse = await fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: motDePasse
        })
    });
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (reponse.status === 200) return true;
    return false;
}

async function connexion() {
    const email = document.querySelector('#email');
    const motDePasse = document.querySelector('#motdepasse');
    const res = await connectionUtilisateur(email.value, motDePasse.value)
    if (res) {
        window.location.href = "indexmodif.html";
    } else {
        alert("Email ou Mot de passe incorrect");
    }
}

const btnConnexion = document.querySelector('#test');
btnConnexion.addEventListener('click', connexion);
