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
    let listCharacter = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("button-class");
    button.innerText = characterList.name
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

//Bonus Task 1.5: add character via .add to the list
/*characterRepository.add({name:'Abigail', Birthday: 13, gift: 'Amethyst'});
characterRepository.add({name:'Emily', Birthday: 27, gift: 'Amethyst'});
characterRepository.add({name:'Haley', Birthday: 14, gift: 'Coconut'});
characterRepository.add({name:'Leah', Birthday: 23, gift: 'Goat Cheese'});
characterRepository.add({name:'Maru', Birthday: 10, gift: 'Battery Pack'});
characterRepository.add({name:'Penny', Birthday: 2, gift: 'Diamond'});*/

//Exercise 1.5 Part 2.4: make sure both function are defined sepelately
console.log(characterRepository.getAll());
console.log(characterRepository.add());

//Task 1.6: use forEach to run the button for each character

characterRepository.getAll().forEach(function(character){
    characterRepository.addListItem(character);
});


