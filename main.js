//Select Character Screen
function SelectCharacter(){

location.hash= '#characterSelect';

//Characters Constructor
function Characters(name, weapon, defend, special, liner, health, avatar) {
    this.name = name;
    this.weapon = weapon;
    this.defend = defend;
    this.specialPower = special;
    this.liner = liner;
    this.health = health;
    this.avatar = avatar;
}



//Character Storage Array
var characterArray = [];


//Define Characters
var link = new Characters('link', 'sword', 0, 'bow', '"zelda is bae"', 10, 'styles/images/zelda-pixel.png');
var megaman = new Characters('megaman', 'fireball', 0, 'explode', '"I hate Dr.Wily"', 11, 'styles/images/megaman-capcom.png');
var ryu = new Characters('ryu', 'kick', 0, 'tornado punch', '"Hiyuken"', 12, 'styles/images/ryu.gif');
var boss = new Characters('bowser', 'punch', 0, 'squash', ':Rawr', 15, 'styles/images/bowser.png');


//Add Characters to Storage Array
characterArray.push(link, megaman, ryu);

console.log(characterArray);


//Characters Container
var selectCharacter= $('.select-character');
var characters = $('.characters');


var selectCharacterTitle = $('<h2>Select Character</h2>');
selectCharacter.prepend(selectCharacterTitle);
//Loop Through Characters for Attributes
characterArray.forEach(function(character, i, array) {

    var characterContainer = $('<li class="chracter-' + character.name + '"><h3 class = "character-name">' + character.name + '</h3><img class="character-image'+ character.name +' " src="'+ character.avatar +'" style="width: 75%; height: 14rem"></img><div class= "character-infoContainer' + character.name+'"><div class="character-info"><span>HP:</span><span> Weapon: ' + character.weapon + '</span><span> Special Power: ' + character.specialPower + '</span><span>' + character.liner + '</div><button class = "'+ character.name + '">Select</button></div></li>');
    characters.append(characterContainer);

$('.character-infoContainerlink').hide();
$('.character-infoContainermegaman').hide();
$('.character-infoContainerryu').hide();
});

//Character Weapons Value
Characters.prototype.attack = function() {

    if (char1) {
        damage = 2;
    } else if (char2) {
        damage = 3;
    } else {
        damage = 4;
    }
};


//Character Special Power Value
Characters.prototype.specialPower = function() {
    if (char1) {
        damage = 4;
    } else if (char2) {
        damage = 6;
    } else {
        damage = 8;
    }
};


//Characters Defend Value
Characters.prototype.defend = function() {
    var randomDefend = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    return randomDefend;
};


//Display Attributes on click
$('.character-imagelink').click(function() {
  $('.character-infoContainerlink').toggle();
});

$('.character-imagemegaman').click(function() {
  $('.character-infoContainermegaman').toggle();

});

$('.character-imageryu').click(function() {
  $('.character-infoContainerryu').toggle();
});


//Select Character and Battle Clicks
var button = $('<a href="#battleArena"><button class ="start-game">BATTLE</button></a>');
selectCharacter.append(button);



//Select Character
characters.find($('.link')).on('click', function(character){
// return link;
console.log(link);
});

characters.find($('.megaman')).on('click', function(character){
// return megaman;
console.log(megaman);
});
characters.find($('.ryu')).on('click', function(character){
// return ryu;
console.log(ryu);
});


characters.find($('.start-game')).on('click', function(){
  e.target.default();
});
}


SelectCharacter();
