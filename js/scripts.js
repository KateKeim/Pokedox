let characterList = [
{
'name': 'Alex',
'Bithday': 13, 'gift':
'Complete Breakfast'
},
{
'name': 'Elliott',
'Bithday': 5,
'gift':'Crap Cakes'
},
{
'name': 'Harvey',
'Bithday': 14,
'gift': 'Coffee'
},
{
'name': 'Sam',
'Bithday': 17,
'gift': 'Cactus Fruit'
},
{
'name': 'Sebastian',
'Bithday': 10,
'gift': ['Frozen Tear', 'Obsidian']
},
{
'name': 'Shane',
'Bithday': 20,
'gift': 'Beer'
}
]

let open = '('
let close = ')'

let character = ''; // declare a empty variable
// for loop that iterates each character in the above array
for(let i = 0; i < characterList.length; i++) {
// added condition for the character length > 5
if (characterList.length > 5) {
character = <p class='character-list'>${characterList[i].name} ${open} Birthday: ${characterList[i].Birthday} ${close} ${characterList[i].gift};</p>
} else {
document.write(<p class='character-list'>${characterList[i].name} ${open} Birthday: ${characterList[i].Birthday}${close}</p>);
}
}
