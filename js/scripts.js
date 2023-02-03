//create Repository to hold IIFE
let characterRepository = (function() {      
    let characterList = [];
    //add pokemon API link
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');
    let inputField = document.querySelector('#mySearch');

    
    //Bonus Task 1.5: check if the typeof parameter is an object: only add if it an object
    function getAll(){ 
        return characterList;
    }
    
    function add(character){
            characterList.push(character);
    }
    
    
    //Task 1.6: create an addListItem function and button for character
    function addListItem(character){
        let characterDex = document.querySelector('.character-list');
        let listCharacter = document.createElement('il');
        let button = document.createElement('button');
        button.innerText = character.name.charAt(0).toUpperCase() + character.name.slice(1);
        listCharacter.classList.add('col-xl-3');
        listCharacter.classList.add('col-lg-4');
        listCharacter.classList.add('row');
        listCharacter.classList.add('align-items-start');
        listCharacter.classList.add('pokemon');
        button.classList.add('col');
        button.classList.add('btn');
        button.classList.add('btn-outline-light');
        button.classList.add('mb-2');
        button.classList.add('mx-2');
        
        listCharacter.appendChild(button);
        characterDex.appendChild(listCharacter);
    
        
        //add an event listener to button
        button.addEventListener('click', function (event) {
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

    function removeList() {
        characterDex.innerHTML = '';
      }

      //function to make the search bar works
      function filterPokemons(query) {
        return characterList.filter(function (character) {
          // toLowerCase() method to make input not case-sensitive
          let pokemonLowerCase = character.name.toLowerCase();
          let queryLowerCase = query.toLowerCase();
          return pokemonLowerCase.startsWith(queryLowerCase);
        });
      }
      
    inputField.addEventListener('input', function() {
        let query = inputField.value;
        let filterList = filterPokemons(query);
        removeList();
        if (filterList.length === 0) {
            showErrorMessage(
                'Sorry. No Pokemon match your search');
        } else {
            filterList.forEach(loadList);
        }
      });

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
        characterRepository.loadDetails(character).then(function (){
            showModal(character);
        });
            
    }

    //to show modal of pokemon details
    function showModal(character) {
        modalContainer.innerHTML = '';
    
        let modal = document.createElement('div');
        modal.classList.add('modal');
    
        //create close button element for exiting
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
    
        let titleElement = document.createElement('h1');
        titleElement.innerText = character.name;
    
        let contentElement = document.createElement('p');
        contentElement.innerText = 'Height: ' + character.height;
    
        let imgElement = document.createElement('img');
        imgElement.src = character.imageUrl;
    
    
    
        //crate all modal above
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(contentElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);
    
        modalContainer.classList.add('is-visible');
            }
    
    //to hide modal
    function hideModal(){
        modalContainer.classList.remove('is-visible');
    }
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
            hideModal();
        }
    });
    
    modalContainer.addEventListener('click', (e) => {
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
        characterRepository.getAll().forEach(function(character){
            characterRepository.addListItem(character);
        });
    });
    
    