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

for (let i=0; i < characterList.length; i++){
  document.write(characterList[i].name + ' ');
  document.write(open + 'Birthday' + characterList[i].birthday + close + '<br />');
}

if (characterList.name = 'Harvey'){
  document.write('<h3>He is a doctor!</h3>');
}
