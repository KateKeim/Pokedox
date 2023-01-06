//This array contains Character data from Stardew Valley game to display in application.

//Exercise 1.5 Part2.2: create Repository to hold IIFE
let characterRepository = (function(){  
//Exercise 1.5 Part 2.1: wrap characterList in an IIFE      
let characterList = 
    [
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



    return {
        getAll: getAll,
        add: add
    };

})();

console.log(characterRepository.getAll());
characterRepository.add({name: 'Lewis'});
console.log(characterRepository.getAll());

//Exercise 1.5 Part 2.4: make sure both function are defined sepelately
console.log(characterRepository.getAll());
console.log(characterRepository.add());

//Exercise 1.5 Part 2.5:Outside of and below the IIFE, have a forEach() loop
let characterList = characterRepository.getAll();

characterList.forEach(printDetails);
function printDetails (character) {
    let highlight = '';
    if (character.Birthday == 14) {
        highlight = ' - He is a doctor!';
    }
    document.write('Name: ' + character.name +  highlight + '<br> ' + 'Birthday ' + character.Birthday + '<br> ' + 'Gift for him: ' + character.gift + '<br>' + '<br>')
}

//Deploy to GitHub Pages again drue to error