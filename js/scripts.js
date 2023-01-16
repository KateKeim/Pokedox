//create Repository to hold IIFE
let characterRepository = (function(){      
let characterList = [];
//add pokemon API link
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//Bonus Task 1.5: check if the typeof parameter is an object: only add if it an object
function add(character){
        characterList.push(character);
}

function getAll(){
    return characterList;
}

//Task 1.6: create an addListItem function and button for character
function addListItem(character){
    let characterDex = document.querySelector('.character-list');
    let listCharacter = document.createElement("ul");
    let button = document.createElement("button");
    button.classList.add("button-class");
    button.innerText = character.name;
    listCharacter.appendChild(button);
    characterDex.appendChild(listCharacter);

    
    //add an event listener to button
    button.addEventListener('click', function (){
        showDetails(character);
    });
}

//Task 1.6: create showDetails function
function showDetails(character) {
    loadDetails(character).then(function (){
        console.log(character);
    });
        
}

//add function to download deta from the link above
function loadList() {
    return fetch(apiUrl).then(function (response){
        return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let character = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(character)
            });
        }).catch(function(e){
            console.error(e);
        })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
        return response.json();
        }).then(function (details){
            item.imageUrl = details.sprites.font_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e){
            console.error(e);
        });
}

//to show modal of pokemon details
function showModal(title, text, img) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');
    //create close button element for exiting
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    let contentElement = document.createElement('p');
    contentElement.innerText = text;
    let imgElement = document.createElement('img');
    imgElement.setAttribute("src", img);
    imgElement.setAttribute("alt", " How this pokemon looks!");


    //crate all modal above
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgElement);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
    modalContainer.addEventListener('click', (e)=>{
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });
}

//to hide modal
function hideModal(){
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
}
window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
        hideModal();
    }
});

function showDetails(character){
    loadDetails(character).then(function(){
        showModal(character.name,character.name + "'s height: " + character.height, character.imageUrl);
    });
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};
})();

characterRepository.loadList().then(function() {
    characterRepository.getAll().forEach(function(character){
        characterRepository.addListItem(character);
    });
});


