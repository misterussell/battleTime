
//Select Character Screen
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




var linkAvatar = new Image(100, 200);
linkAvatar.src = 'images/Zelda.png';
console.log(linkAvatar);



//Character Storage Array
var characterArray = [];


//Define Characters
var character1 = new Characters('link', 'sword', 0, 'chain', '"zelda is bae"', 10, linkAvatar);
var character2 = new Characters('megaman', 'fireball', 0, 'explode', '"I hate Dr.Wily"', 11);
var character3 = new Characters('ryu', 'kick', 0, 'tornado punch', '"Hiyuken"', 12);
var boss = new Characters('bowser', 'punch', 0, 'squash', ':Rawr', 15);


//Add Characters to Storage Array
characterArray.push(character1, character2, character3);

console.log(characterArray);


//Characters Container
var selectCharacter= $('.select-character');
var characters = $('.characters');

//Loop Through Characters for Attributes
characterArray.forEach(function(character, i, array) {

    var characterContainer = $('<li class="chracters-list' + [i] + '"><h3 class = "character-name'+[i]+'">' + character.name + '</h3><div class= "character-infoContainer"><div class="character-info' + [i]+'"><span> Weapon: ' + character.weapon + '</span><span> Special Power: ' + character.specialPower + '</span><span>' + character.liner + '</div></div><button class="select">Select</button></li>');
    characters.append(characterContainer);

});

//Character Weapons Value
Characters.prototype.weapon = function() {

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
$('.character-name0').click(function() {
  $('.character-info0').toggle();
});

$('.character-name1').click(function() {
  $('.character-info1').toggle();
});

$('.character-name2').click(function() {
  $('.character-info2').toggle();
});

var button = $('<button class ="start-game">BATTLE</button>');
selectCharacter.append(button);



// ARENA
var battleArena = $('.battleContainer');

function renderBattleArena(container, character, boss) {
  //define passed in parameters for use in subFunctions


  //as there is only currently only one player all action buttons only need to provide responses for one player
  var $actionNav = $('<nav class="characterActions"></nav>');
  var $attackButton = $('<button class="attack">Attack</button>');
  var $defendButton = $('<button class="defend">Defend</button>');
  var $powerButton = $('<button class="specialPower">Super Power</button>');
  var $statContainer = $('<ul class="statContainer"></ul>');

  function renderStats(statContainer, character){
    var $li = $('<li></li>');
    var $healthBar = $('<div class="health"></div>');
    var $currentHealth = $('<h2>current health/total health</h2>');
    var $characterName = $('<h1>Character Name</h1>');
    // battleArena.append(statContainer.append($li.append($characterName, $healthBar.append($currentHealth))));
    container.append(statContainer.append($li.append($characterName, $healthBar.append($currentHealth))));

  }

  function getCharacterStats() {
    //this will get the info for the current character and then pass the arguments in so that new info can be passed along to the stat renderer and display current into
  }

  function getBossStats() {
    //this will get the info for the boxx and then pass the arguments in so that new info can be passed along to the stat renderer and display current boss stats
  }

  battleArena.append($actionNav.append($attackButton, $defendButton, $powerButton));
  renderStats($statContainer);

  //click handling
  battleArena.find('.attack').on('click', function(e){
    e.preventDefault();
    // var hit = character.attack();
    console.log('attack');
  });

  battleArena.find('.defend').on('click', function(e){
    e.preventDefault();
    console.log('defend');
    // character.defend();
  });

  battleArena.find('.specialPower').on('click', function(e){
    e.preventDefault();
    // console.log(specialPower);
    character.superPower();
    var hit = character.specialPower();
    return hit;
  });

  // console.log(battleArena.find('.health'));

}

renderBattleArena(battleArena);
