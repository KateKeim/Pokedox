//create Repository to hold IIFE
let characterRepository = (function() {      
    let characterList = [];
    //add pokemon API link
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = $('#modal-container');
    
    //Bonus Task 1.5: check if the typeof parameter is an object: only add if it an object
    function getAll(){ 
        return characterList;
    }
    
    function add(character){
            characterList.push(character);
    }
    
    
    //Task 1.6: create an addListItem function and button for character
    function addListItem(character){
        let characterDex = $('.character-list');
        let listCharacter = $('<li class="col-xl-3 col-lg-4 row align-item-start pokemon"></li>');
        let button = $('<button class="col btn btn-outline-light mb-2 mx2">');
        let closeButtonElement = $('<button class = "modal-close"></button>');
        closeButtonElement.text('Close');
        button.text(character.name.charAt(0).toUpperCase() + character.name.slice(1));
        listCharacter.append(button);
        characterDex.append(listCharacter);
    
        
        //add an event listener to button
        button.click (function (event) {
            showDetails(character);
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
        return fetch(url).then(function (response) {
            return response.json();
            }).then(function (details){
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types.map((type)=>type.type.name);
                item.abilities = details.abilities.map((abilities) => abilities.ability.name);
            }).catch(function(e) {
                console.error(e);
            });
    }
    
    //Task 1.6: create showDetails function
    function showDetails(character) {
        characterRepository.loadDetails(character).then(function() {
            showModal(character);
        });
            
    }

    //to show modal of pokemon details
    function showModal(character) {
        modalContainer.empty(); // clear the old content for the selected element 
    
        let modal = $('<div class="modal"></div>');
    
        //create close button element for exiting
        let closeButton = $('<button class = "modal-close" id ="closebutton" data-dismiss="modal">Close</button>') // inject the button from JS 
     //   let closeButtonElement = $('#closebutton');
        closeButton.on('click', hideModal); // add the click to close 
    
        let titleElement = document.createElement('h1');
        titleElement.innerText = character.name.charAt(0).toUpperCase() + character.name.slice(1);
    
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + character.height + ('\n') + 'Type: ' + character.types + ('\n') + 'Abilities: ' + character.abilities;

        let imgElement = document.createElement('img');
        imgElement.src = character.imageUrl;
    
    
    
        //crate all modal above
        modal.append(closeButton); //  add the button to the modal 
        modal.append(titleElement);
        modal.append(contentElement);
        modal.append(imgElement);
        modalContainer.append(modal);
        modalContainer.addClass('is-visible');
            }
    
    //to hide modal
    function hideModal(){
        modalContainer.removeClass('is-visible');
    }
    
    $(window).keydown(function(e) {
        if (e.key === 'Escape' && modalContainer.hasClass('is-visible')){
            hideModal();
        }
    });
    
    modalContainer.click(function(e) {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });
    


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
    })();
    
    characterRepository.loadList().then(function() {
        characterRepository.getAll().map(function(character){
            characterRepository.addListItem(character);
        });
    });

    let filter = document.querySelector('#mySearch');
    let noResults = document.createElement('h3');
    noResults.innerText = "No Pokémon found.";
    noResults.style.color = 'white';

    filter.addEventListener('input', () => {

    let list = document.querySelector('.character-list');

    let value = filter.value.toLowerCase();
    listItems = list.getElementsByTagName('li');
    let isPokemonFound = false;

    for (let i = 0; i < listItems.length; i++) {
    let button = listItems[i].getElementsByTagName('button')[0];
    let pokemon = button.textContent || button.innerText;

    if (pokemon.toLowerCase().indexOf(value) > -1) {
    listItems[i].style.display = "";
    isPokemonFound = true;
    } else {
    listItems[i].style.display = "none";
    }
    }

    if (!isPokemonFound) {
    list.appendChild(noResults);
    }

    if (list.contains(noResults) && isPokemonFound) {
    list.removeChild(noResults)
    }
    });