//build title for game
function renderHome(title, sub, buttonText, hashLocation) {
    var container = $('.Splash-Page');
    var h1 = $('<h1></h1>');
    var h3 = $('<h3></h3>');
    var link = $('<a href="' + hashLocation + '"></a>');
    var button = $('<button></button>');
    h1.text(title);
    container.append(h1);
    container.addClass('page1');
    h3.text(sub);
    container.append(h3);
    container.append(link.append(button));
    button.append(buttonText);
    button.on('click', function(e) {
        console.log('hello');
        if (button.innerText === 'Let\'s Battle') {
            console.log('hi');
        } else if (button.innerText === 'Battle Again') {
            checkHash(' ');
        }
    });
  }

function checkHash() {
    $('.Splash-Page').empty().removeClass('restart').removeClass('home');
    if (location.hash === '') {
        $('.Splash-Page').addClass('home');
        renderHome('Battle Game', 'Start New Game', 'Let\'s Battle', '#characterSelect');
    } else if (location.hash === '#characterSelect') {
      SelectCharacters();
    } else if (location.hash === '#battle') {
      renderBattleArena();
    } else if (location.hash === '#gameOver') {
      $('.Splash-Page').addClass('restart');
        renderHome('Game Over', 'Player1 win/loss', 'Battle Again', ' ');
    }
}


$(window).on('hashchange', function(e) {
    console.log(location.hash);
    checkHash();
  });

function SelectCharacters() {

location.hash= '#characterSelect';

//Select Character Screen
//Characters Constructor
function Characters(name, weapon, special, liner, health, avatar) {
    this.name = name;
    this.weapon = weapon;
    // this.shield = sheild;
    this.specialPower = special;
    this.liner = liner;
    this.health = health;
    this.totalHealth = health;
    this.avatar = avatar;
}

//Character Storage Array
var characterArray = [];

//Define Characters
var link = new Characters('link', 'sword', 'bow', '"zelda is bae"', 10, 'styles/images/zelda-pixel.png');
var megaman = new Characters('megaman', 'fireball', 'explode', '"I hate Dr.Wily"', 11, 'styles/images/megaman-capcom.png');
var ryu = new Characters('ryu', 'kick', 'tornado punch', '"Hiyuken"', 12, 'styles/images/ryu.gif');
var boss = new Characters('bowser', 'punch', 'squash', ':Rawr', 15, 'styles/images/bowser.png');

//Add Characters to Storage Array
characterArray.push(link, megaman, ryu);
// console.log(characterArray);
//Characters Container
var selectCharacter= $('.select-character');
var characters = $('.characters');

var selectCharacterTitle = $('<h2>Select Character</h2>');
selectCharacter.prepend(selectCharacterTitle);
//Loop Through Characters for Attributes
characterArray.forEach(function(character, i, array) {

var characterContainer = $('<li class="chracter-' + character.name + '"><h3 class = "character-name">' + character.name + '</h3><img class="character-image'+ character.name +' " src="'+ character.avatar +'" style="width: 75%; height: 14rem"></img><div class= "character-infoContainer' + character.name+'"><div class="character-info"><span> Weapon: ' + character.weapon + '</span><span> Special Power: ' + character.specialPower + '</span><span>' + character.liner + '</div><button class = "'+ character.name + '">Select</button></div></li>');
characters.append(characterContainer);

$('.character-infoContainerlink').hide();
$('.character-infoContainermegaman').hide();
$('.character-infoContainerryu').hide();
});

//Character Weapons Value
Characters.prototype.attack = function() {
  // returned value is the amount of damage registered
    if (this.name === 'link') {
        return 2;
    } else if (this.name === 'megaman') {
        return 3;
    } else if (this.name === 'ryu') {
        return 4;
    }
};

//Character Special Power Value
  Characters.prototype.useSpecialPower = function() {
      // returns a damage value
      if (this.name === 'link') {
          return 4;
      } else if (this.name === 'megaman') {
          return 6;
      } else {
          return  8;
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

// ARENA
var battleArena = $('.battleContainer');

function renderBattleArena(container, character, boss) {
  location.hash= '#battle';
  //define passed in parameters for use in subFunctions

  //as there is only currently only one player all action buttons only need to provide responses for one player

  //singular container for a specific characters stats
  var $statContainer = $('<ul class="statContainer"></ul>');

  //log container to display all actions
  var $battleLog = $('<div class="battleLog"></div>');

  var $actionNav = $('<nav class="characterActions"></nav>');
  var $attackButton = $('<button class="attack">Attack</button>');
  var $defendButton = $('<button class="defend">Defend</button>');
  var $powerButton = $('<button class="specialPower">Super Power</button>');

  function renderStats(statContainer, player){
    var $li = $('<li></li>');
    var $healthBar = $('<div class="health"></div>');
    var $currentHealth = $('<h2>' + player.health + '/' + player.totalHealth + '</h2>');
    var $characterName = $('<h1>' + player.name + '</h1>');
    // battleArena.append(statContainer.append($li.append($characterName, $healthBar.append($currentHealth))));
    container.append(statContainer.append($li.append($characterName, $healthBar.append($currentHealth))));
  }

  function gameOver() {
    if (boss.health <= 0){
      location.hash = '#gameOver';
    } else if (character.health <= 0) {
      location.hash = '#gameOver';
    }
  }

  //CREATE the battleLog
  battleArena.append($battleLog);

  //CREATE the action bar
  battleArena.append($actionNav.append($attackButton, $defendButton, $powerButton));

  //BATTLE HANDLER
  battleArena.find('.attack').on('click', function(e){
    e.preventDefault();
    $('.attack').prop("disabled", true);
    var hit = character.attack();
    var attackMessage = $('<p>' + character.name + ' used ' + character.weapon + ' on  ' + boss.name + ' for ' + hit + ' damage.</p>');
    //save that value and remove it from the boss.health - hit;
    boss.health -= hit;
    $statContainer.empty();
    //render the characters current stats
    renderStats($statContainer, character);
    //render the boss's current stats
    renderStats($statContainer, boss);
    //set the button timeout and register the boss's damage
    setTimeout(function() {
      bossAttack();
      $('.attack').prop("disabled", false);
    }, 2500);
    $battleLog.append(attackMessage);
    //add the action to a log
    gameOver();
    return boss.health, character.health;
  });

  battleArena.find('.defend').on('click', function(e){
    //handle button behavoir
    e.preventDefault();
    $('.defend').prop("disabled", true);
    //set parameters
    var defend = character.defend();
    var defendMessage = $('<p>' + character.name + ' blocks ' + defend + ' damage from ' + boss.name + '</p>');
    //disable button
    setTimeout(function() {
      bossAttack(defend);
      $('.defend').prop("disabled", false);
    }, 2500);
    gameOver();
    //append to log
    $battleLog.append(defendMessage);
  });

  battleArena.find('.specialPower').on('click', function(e){
    e.preventDefault();
    $('.specialPower').prop("disabled", true);
    var hit = character.useSpecialPower();
    var attackMessage = $('<p>' + character.name + ' used ' + character.weapon + ' on  ' + boss.name + ' for ' + hit + ' damage.</p>');
    boss.health -= hit;
    setTimeout(function() {
      bossAttack();
      $('.specialPower').prop("disabled", false);
    }, 2500);
    $statContainer.empty();
    renderStats($statContainer, character);
    renderStats($statContainer, boss);
    gameOver();
    $battleLog.append(attackMessage);
    return boss.health, character.health;
  });

  //BOSS HANDLER
  // if the bosses health changes that means the users turn is over
  // call the boss to attack
  // wait for that attack to register before allowing user to click again
  function bossAttack (defend) {
    var hit;
    if (defend) {
      hit = boss.attack() - defend;
    } else {
      hit = boss.attack();
    }
    var attackMessage = $('<p>' + boss.name + ' hits ' + character.name + ' for ' + hit + ' damage.</p>');
    character.health -= hit;
    $statContainer.empty();
    renderStats($statContainer, character);
    renderStats($statContainer, boss);
    $battleLog.append(attackMessage);
    return character.health;
  }

  //render initial stats
  renderStats($statContainer, character);
  renderStats($statContainer, boss);
}


// TESTING
// renderBattleArena(battleArena, megaman, boss);
// SelectCharacter();
