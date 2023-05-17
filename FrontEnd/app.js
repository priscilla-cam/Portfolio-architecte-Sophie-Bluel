let modal = null

const openModal = function (e) {
    e.preventDefault()
    modal = document.querySelector(e.target.getAttribute('href'))
    modal.style.display = null
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation)
}

const closeModal = function (e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', 'true')
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation)
    modal = null

}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)

})

//afficher travaux dans modale

async function recupererTousTravauxApi() {
    const reponse = await fetch('http://localhost:5678/api/works', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await reponse.json();
}

//function supprimeCode() {
//const sectionGallery = document.querySelector(".gallery");
//while (sectionGallery.firstChild) {
// sectionGallery.removeChild(sectionGallery.firstChild);
//}
//}

function ajouteTravauxAuDom(travaux) {
    const sectionModale = document.querySelector(".travaux-modal");

    travaux.forEach(travail => {
        const workElement = document.createElement("article");
        const imageElement = document.createElement("img");

        imageElement.src = travail.imageUrl;


        workElement.appendChild(imageElement);
        sectionModale.appendChild(workElement);
    });
}

const travaux = await recupererTousTravauxApi();
ajouteTravauxAuDom(travaux);
