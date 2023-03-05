async function recupererTousTravauxApi() {
    const reponse = await fetch('http://localhost:5678/api/works', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await reponse.json();
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

//Code ajoute pour les filtres

async function recupererCategoriesApi() {
    const reponse = await fetch('http://localhost:5678/api/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await reponse.json();
}

function Filtrerobjets(category) {
    const sectionObjets = document.querySelector(".objets");

    categories.forEach(category = objets)
        ;
}

