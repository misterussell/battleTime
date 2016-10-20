function Characters (name, weapon, defend, special, liner, health) {
  this.name = name;
  this.weapon = weapon;
  this.defend = defend;
  this.specialPower = special;
  this.liner = liner;
  this.health = health;
}

var characterArray = [];

var character1 = new Characters('link', 'sword', 0, 'chain', 'zelda is bae', 10);
var character2 = new Characters('megaman', 'fireball', 0, 'explode', 'I hate Dr.Wily', 11);
var character3 = new Characters('ryu', 'kick', 0, 'chain', 'Hiyuken', 12);
var boss = new Characters('bowser', 'punch', 0 , 'squash', 'rawr', 15);


characterArray.push(character1, character2, character3);

console.log(characterArray);

var characters = $('.characters');


characterArray.forEach(function(character, i, array){
  var characterContainer = $('<div class="character-container"><div class="chracter-info">' + character.name + ' , ' + character.weapon + ' , ' + character.specialPower + ', ' + character.liner +'</div></div>');
  characters.append(characterContainer);


});


Characters.prototype.weapon = function () {

if(char1) {
  damage = 2;
} else if(char2) {
  damage = 3;
} else {
  damage = 4;
}
};

Characters.prototype.specialPower = function () {
  if(char1) {
    damage = 4;
  } else if(char2) {
    damage = 6;
  } else {
    damage = 8;
  }
};

Character.prototype.defend = function () {
  var randomDefend = Math.floor(Math.random() * (3 - 1 + 1)) +1;
  return randomDefend;
};
