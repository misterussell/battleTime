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
        console.log('pick your poison');
    } else if (location.hash === '#battle') {

    } else if (location.hash === '#gameOver') {
      $('.Splash-Page').addClass('restart');
        renderHome('Game Over', 'Player1 win/loss', 'Battle Again', ' ');
    }
}


$(window).on('hashchange', function(e) {
    console.log(location.hash);
    checkHash();
});
checkHash();
//Select Character Screen

// //Characters Constructor
// function Characters(name, weapon, defend, special, liner, health, avatar) {
//     this.name = name;
//     this.weapon = weapon;
//     this.defend = defend;
//     this.specialPower = special;
//     this.liner = liner;
//     this.health = health;
//     this.avatar = avatar;
// }
//
// var linkAvatar = new Image(100, 200);
// linkAvatar.src = 'images/Zelda.png';
// console.log(linkAvatar);
//
// //Character Storage Array
// var characterArray = [];
//
// //Define Characters
// var character1 = new Characters('link', 'sword', 0, 'chain', '"zelda is bae"', 10, linkAvatar);
// var character2 = new Characters('megaman', 'fireball', 0, 'explode', '"I hate Dr.Wily"', 11);
// var character3 = new Characters('ryu', 'kick', 0, 'tornado punch', '"Hiyuken"', 12);
// var boss = new Characters('bowser', 'punch', 0, 'squash', ':Rawr', 15);
//
// //Add Characters to Storage Array
// characterArray.push(character1, character2, character3);
//
// console.log(characterArray);
//
// //Characters Container
// var selectCharacter = $('.select-character');
// var characters = $('.characters');
//
// //Loop Through Characters for Attributes
// characterArray.forEach(function(character, i, array) {
//
//     var characterContainer = $('<li class="chracters-list' + [i] + '"><h3 class = "character-name' + [i] + '">' + character.name + '</h3><div class= "character-infoContainer"><div class="character-info' + [i] + '"><span> Weapon: ' + character.weapon + '</span><span> Special Power: ' + character.specialPower + '</span><span>' + character.liner + '</div></div><button class="select">Select</button></li>');
//     characters.append(characterContainer);
//
// });
//
// //Character Weapons Value
// Characters.prototype.weapon = function() {
//
//     if (char1) {
//         damage = 2;
//     } else if (char2) {
//         damage = 3;
//     } else {
//         damage = 4;
//     }
// };
//
//
// //Character Special Power Value
// Characters.prototype.specialPower = function() {
//     if (char1) {
//         damage = 4;
//     } else if (char2) {
//         damage = 6;
//     } else {
//         damage = 8;
//     }
// };
//
//
// //Characters Defend Value
// Characters.prototype.defend = function() {
//     var randomDefend = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//     return randomDefend;
// };
//
//
// //Display Attributes on click
// $('.character-name0').click(function() {
//     $('.character-info0').toggle();
// });
//
// $('.character-name1').click(function() {
//     $('.character-info1').toggle();
// });
//
// $('.character-name2').click(function() {
//     $('.character-info2').toggle();
// });
//
// var button = $('<button class ="start-game">BATTLE</button>');
// selectCharacter.append(button);
