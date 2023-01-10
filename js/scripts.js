//This array contains Character data from Stardew Valley game to display in application.

//Exercise 1.5 Part2.2: create Repository to hold IIFE
let characterRepository = (function(){  
//Exercise 1.5 Part 2.1: wrap characterList in an IIFE      
let characterList = [
        {
            "name": 'Alex',
            "Birthday": 13,
            "gift": 'Complete Breakfast'
        },
        {
            "name": 'Elliott',
            "Birthday": 5,
            "gift": 'Crap Cakes'
        },
        {
            "name": 'Harvey',
            "Birthday": 14,
            "gift": 'Coffee'
        },
        {
            "name": 'Sam',
            "Birthday": 17,
            "gift": 'Cactus Fruit'
        },
        {
            "name": 'Sebastian',
            "Birthday": 10,
            "gift": ['Frozen Tear', 'Obsidian']
        },
        {
            "name": 'Shane',
            "Birthday": 20,
            "gift": 'Beer'
        }
    ];

//Bonus Task 1.5: check if the typeof parameter is an object: only add if it an object
function add(character){
    if (
    typeof character === "object" &&
    "name" in character &&
    "Birthday" in character &&
    "gift" in character
    ) {
    characterList.push(character);
    } else {
        console.log("characters type is wrong");
    }
}

//1.5 Task part 1: use forEach instead of for
    /*characterList.forEach(function(character){
        document.write('Name: ' + character.name +'<br> ' + 'Birthday ' + character.Birthday + '<br> ' + 'Gift for him: ' + character.gift + '<br>');
    })*/

//Exercise 1.5 Part 2.3: assigned key getAll = show characterList.array

    function getAll(){
        return characterList;
    }

//Exercise 1.5 Part 2.3: assigned key add = add an new item
    function add(character){
        characterList.push(character);
    }

//Task 1.6: create an addListItem function and button for character
    function addListItem(character){
    let characterDex = document.querySelector('.character-list');
    let listCharacter = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = character.name;
    button.classList.add("button-class");
    listCharacter.appendChild(button);
    characterDex.appendChild(listCharacter);
    
    //add an event listener to button
    button.addEventListener('click', function (event){
        showDetails(character);
    })

//Task 1.6: create showDetails function
    function showDetails(character) {
        console.log(character);
    }

    }

   return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };

})();

//Bonus Task 1.5: add character via .add to the list
characterRepository.add({name:'Abigail', Birthday: 13, gift: 'Amethyst'});
characterRepository.add({name:'Emily', Birthday: 27, gift: 'Amethyst'});
characterRepository.add({name:'Haley', Birthday: 14, gift: 'Coconut'});
characterRepository.add({name:'Leah', Birthday: 23, gift: 'Goat Cheese'});
characterRepository.add({name:'Maru', Birthday: 10, gift: 'Battery Pack'});
characterRepository.add({name:'Penny', Birthday: 2, gift: 'Diamond'});

//Exercise 1.5 Part 2.4: make sure both function are defined sepelately
console.log(characterRepository.getAll());
console.log(characterRepository.add());

//Task 1.6: use forEach to run the button for each character

characterRepository.getAll().forEach(function(character){
    characterRepository.addListItem(character);
});


