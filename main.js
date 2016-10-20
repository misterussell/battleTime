console.log('hello');

var battleArea = $('.battleContainer');

function renderBattleArea(battleArea) {
  var statContainer = $('<ul class="statContainer"></ul>');
  var $li = $('<li></li>');
  var $actionNav = $('<nav class="characterActions"></nav>');
  battleArea.append(statContainer.append($li));
}

renderBattleArea(battleArea);


// this.attack === sword
//
// Character.prototype.attack = function () {
//   if (char1) {
//     damage = 3;
//   } else if (char2) {
//     damage = 4;
//   } else if (char3) {
//
//   }
//
//   var damage = 2;
//   return damage;
// }

// button clicked {
//   computer HP - character1.slash()
//
// }
