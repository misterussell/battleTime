
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
