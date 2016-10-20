var battleArena = $('.battleContainer');

function renderBattleArena(battleArena, character, boss) {
  //as there is only currently only one player all action buttons only need to provide responses for one player
  var $actionNav = $('<nav class="characterActions"></nav>');
  var $attackButton = $('<button class="attack">Attack</button>');
  var $defendButton = $('<button class="defend">Defend</button>');
  var $powerButton = $('<button class="specialPower">Super Power</button>');

  var renderStats(character) {
    var statContainer = $('<ul class="statContainer"></ul>');
    var $li = $('<li></li>');
    var $healthBar = $('<div class="health"></div>');
    var $currentHealth = $('<h2>current health/total health</h2>');
    var $characterName = $('<h1>Character Name</h1>');
    battleArena.append(statContainer.append($li.append($characterName, $healthBar.append($currentHealth))));

  }

  function getCharacterStats() {
    //this will get the info for the current character and then pass the arguments in so that new info can be passed along to the stat renderer and display current into
    renderStats(arguments);
  }

  function getBossStats() {
    //this will get the info for the boxx and then pass the arguments in so that new info can be passed along to the stat renderer and display current boss stats
  }

  battleArena.find('.attack').on('click', function(e){
    e.preventDefault();
    var hit = character.attack();
    return hit;
  });

  battleArena.find('.defend').on('click', function(e){
    e.preventDefault();
    character.defend();
  });

  battleArena.find('.specialPower').on('click', function(e){
    e.preventDefault();
    character.superPower();
    var hit = character.specialPower();
    return hit;
  });

  battleArena.append($actionNav.append($attackButton, $defendButton, $powerButton));
  renderStatBox();

  console.log(battleArena.find('.health'));

}

renderBattleArena(battleArena);
