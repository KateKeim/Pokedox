//This array contains Character data from Stardew Valley game to display in application.

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

    //1.5 Task part 1: use forEach instead of for
    characterList.forEach(function(character){
        document.write(character.name +' ' + 'Birthday ' + character.Birthday + ' ' + 'Gift for him: ' + character.gift + '<br>');
    })

