//This array contains Character data from Stardew Valley game to display in application.
//Wrap array to local scope

let characterRepository = (function () {
let characterList = [
    {
    "name": 'Alex',
    "Birthday": 13,
    "gift":'Complete Breakfast'
    },
    {
    "name": 'Elliott',
    "Birthday": 5,
    "gift":'Crap Cakes'
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

    characterList.forEach(character => console.log(character));

    //add a character to the characterLst array
    return {
        add: function(character) {
            characterList.push(character);
        },
        getAll: function() {
            return characterList;
        }
    };
})();

console.log(characterRepository.getAll());
characterRepository.add({ name: 'Lewis'});
console.log(characterRepository.getAll());

