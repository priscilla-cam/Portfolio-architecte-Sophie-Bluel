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
creationFiltresDOM(travaux);


function creationFiltresDOM(travaux) {
    const element = document.querySelector('#portfolio')
    const gallery = document.querySelector('.gallery')
    // regarder dans la reponse si on a les categories
    // Sur chaque element du tableau on recupere category
    const nouveauTableau = travaux.map(travau => travau.category.name);
    // recuperer que le nom des categorie et mettre dans une variable de type ?
    // Supprimer doublons
    const CategoriesSanDoublons = new Set(nouveauTableau);
    // Creer un element html
    const nouvelleDiv = document.createElement("div");
    nouvelleDiv.classList.add('filters')

    const FiltreTous = document.createElement("h4");
    FiltreTous.classList.add('Tous')
    FiltreTous.innerText = 'Tous'

    const FiltreObjets = document.createElement("h4");
    FiltreObjets.classList.add('Objets')
    FiltreObjets.innerText = 'Objets'

    const FiltreAppartements = document.createElement("h4");
    FiltreAppartements.classList.add('Appartements')
    FiltreAppartements.innerText = 'Appartements'

    const FiltreHotels = document.createElement("h4");
    FiltreHotels.classList.add('Hotels')
    FiltreHotels.innerText = 'Hotels & Restaurants'

    console.log(nouvelleDiv)
    // Injecter dans le DOM
    element.insertBefore(nouvelleDiv, gallery);
    element.insertBefore(FiltreTous, gallery);
    element.insertBefore(FiltreObjets, gallery);
    element.insertBefore(FiltreAppartements, gallery);
    element.insertBefore(FiltreHotels, gallery);
}


// Add event Lister

const Tous = document.querySelector(".Tous")
Tous.addEventListener("click", recupererTousTravauxApi);

const Objets = document.querySelector(".Objets")
Objets.addEventListener("click", FiltreObjets());

function FiltreObjets() {

    if (works.categoryId = "1") {
        ajouteTravauxAuDom
    }
    else {

    }
}

