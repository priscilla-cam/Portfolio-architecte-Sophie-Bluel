async function recupererTousTravauxApi() {
    const reponse = await fetch('http://localhost:5678/api/works', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await reponse.json();
}

function supprimeCode() {
    const sectionGallery = document.querySelector(".gallery");
    while (sectionGallery.firstChild) {
        sectionGallery.removeChild(sectionGallery.firstChild);
    }
}

function ajouteTravauxAuDom(travaux) {
    const sectionGallery = document.querySelector(".gallery");

    travaux.forEach(travail => {
        const workElement = document.createElement("article");
        const imageElement = document.createElement("img");
        const nomElement = document.createElement("h3");

        imageElement.src = travail.imageUrl;
        nomElement.innerText = travail.title;

        workElement.appendChild(imageElement);
        workElement.appendChild(nomElement);
        sectionGallery.appendChild(workElement);
    });
}

const travaux = await recupererTousTravauxApi();
ajouteTravauxAuDom(travaux);
creationFiltresDOM(travaux);


function creationFiltresDOM(travaux) {
    const filtres = document.querySelector('.filtres')
    const nouveauTableau = travaux.map(travau => travau.category.name);
    const CategoriesSanDoublons = new Set(nouveauTableau);

    const h4 = document.createElement("h4");
    h4.innerText = 'Tous'
    h4.classList.add('filtres-clique')
    h4.classList.add('tous')
    filtres.appendChild(h4);
    ajouteEventSurFiltres()

    CategoriesSanDoublons.forEach(categorie => {
        const h4 = document.createElement("h4");
        h4.innerText = categorie
        h4.classList.add('filtres-clique')
        filtres.appendChild(h4);
    });
}

function ajouteEventSurFiltres() {
    const filtres = document.querySelector('.filtres')

    filtres.addEventListener('click', (event) => {
        let resultats = null;

        supprimeCode();
        if (event.target.innerText === 'Tous') {
            resultats = travaux
        } else {
            resultats = travaux.filter(travail => travail.category.name === event.target.innerText);
        }

        ajouteTravauxAuDom(resultats);
    })
}
