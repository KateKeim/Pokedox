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

return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

characterRepository.loadList().then(function() {
    characterRepository.getAll().forEach(function(character){
        characterRepository.addListItem(character);
    });
});


