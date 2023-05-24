// Import de la liste de tous les travaux du FETCH sur l'API, à partir de FETCHDATAS.JS
import { works } from "./fetchDatas.js";
// Import de la liste de toutes les catégories de travaux du FETCH sur l'API, à partir de FETCHDATAS.JS
import { categories } from "./fetchDatas.js";
// Import de la fonction "editMode" à partir de "editMode.js" permettant d'actualiser la page INDEX.HTML si authentifié.
import { editMode } from "./editMode.js";
// Import de la fonction "modale" à partir de "modale.js" permettant de gérer l'affichage de la MODALE dans INDEX.HTML.
import { modale } from "./modale.js";
// Export de la fonction "generateGallery" dans "modale.js" pour actualisation de l'affichage des "Galleries" après ajout ou suppression d'un projet.
export { generateGallery };


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

// Appel de la fonction "editMode" de "editMode.js" qui permet d'actualiser la page INDEX.HTML si authentifié.
editMode();

// Appel de la fonction de gestion de la "Modale" dans "modale.JS" qui permet de gérer les projets si authentifié.
modale();