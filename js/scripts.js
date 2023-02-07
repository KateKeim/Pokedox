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
        $(button).text(character.name.charAt(0).toUpperCase() + character.name.slice(1));
        $(listCharacter).append(button);
        $(characterDex).append(listCharacter);
    
        
        //add an event listener to button
        $(button).click (function (event) {
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
        $(modalContainer).html = '';
    
        let modal = $('<div class="modal"></div>');
    
        //create close button element for exiting
        let closeButtonElement = $('<button class = "modal-close"></button>');
        $(closeButtonElement).text('Close');
        $(closeButtonElement).on('click', hideModal);
    
        let titleElement = document.createElement('h1');
        titleElement.innerText = character.name;
    
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + character.height + ('\n') + 'Type: ' + character.types + ('\n') + 'Abilities: ' + character.abilities;

        let imgElement = document.createElement('img');
        imgElement.src = character.imageUrl;
    
    
    
        //crate all modal above
        $(modal).append(closeButtonElement);
        $(modal).append(titleElement);
        $(modal).append(contentElement);
        $(modal).append(imgElement);
        $(modalContainer).append(modal);
        $(modalContainer).addClass('is-visible');
            }
    
    //to hide modal
    function hideModal(){
        $(modalContainer).removeClass('is-visible');
    }
    
    $(window).keydown(function(e) {
        if (e.key === 'Escape' && $(modalContainer).hasClass('is-visible')){
            hideModal();
        }
    });
    
    $(modalContainer).click(function(e) {
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
    
    let filter = $('#mySearch');
    let noResult = $('<h3></h3>');
    $(noResult).text('No Pokemon found');
    $(filter).on('input', () => {
        let list = $('.character-list');
        let value = filter.value.toLowerCase();
        listItem = list.getElementByTagName('li');
        let isPokemonFound = false;

        for(i=0; i<listItem.length; i++) {
            let button = listItem[i].getElementByTagName('button')[0];
            let pokemon = button.textContent || button.innerText;

            if(pokemon.toLowerCase().indexOf(value)>-1) {
                listItem[i].style.display="";
                isPokemonFound = true;
            } else {
                listItem[i].style.display="none";
            }
        }
            if(!isPokemonFound){
                list.appendChild(noResult);
            }

            if(list.contains(noResult)&&isPokemonFound){
                list.removeChild(noResult)
            }
    });