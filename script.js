var genName = [
    'Kaelan Stormwell',
    'Arthuria Pendragon',
    'Mash Kyrielight',
    'Donatelo Fridieci',
    'Sir Mordred',
    'Gabe N'
]

var genRace = [
    'Human',
    'Orc',
    'Elves',
    'Dwarf',
    'Demi-Human',
    'Beast',
    'Spirit'
]

var genClass = [
    'Saber',
    'Archer',
    'Lancer',
    'Rider',
    'Caster',
    'Assasin',
    'Berserker' 
]



var btnName = document.getElementById('btnName');
var btnRace = document.getElementById('btnRace');
var btnClass = document.getElementById('btnClass');

btnName.addEventListener('click', function(){
    var randomNumber = Math.floor(Math.random() * (genName.length))
    document.getElementById('content').innerText = genName[randomNumber] 
})

btnRace.addEventListener('click',function(){
    var randomNumber = Math.floor(Math.random() * (genRace.length))
    document.getElementById('content').innerText = genRace[randomNumber]
})

btnClass.addEventListener('click',function(){
    var randomNumber = Math.floor(Math.random() * (genClass.length))
    document.getElementById('content').innerText = genClass[randomNumber]
  
})