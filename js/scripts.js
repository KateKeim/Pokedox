//This array contains Character data from Stardew Valley game to display in application.
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
    ]
    
    let open = '('
    let close = ')'
    let character = ''; // declare a empty variable
    let comment = 'He is a doctor!'; //note to add
    let birthday = characterList.Birthday;

    // for loop that iterates each character in the above array
    for(let i = 0; i < characterList.length; i++) {
    // added condition for the character length > 5
    if (characterList[i].Birthday == 14) {
    character = `<p class='character-list'>${characterList[i].name} 
        ${open} Birthday: ${characterList[i].Birthday} ${close} ${comment} </p>`;
    document.write(character);
    } else {
    document.write(`<p class='character-list'>${characterList[i].name} 
        ${open} Birthday: ${characterList[i].Birthday}${close}</p>`);
    }
    }
