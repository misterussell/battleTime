//build title for game
function renderHome(title, sub, buttonText, hashLocation) {
    var container = $('.Splash-Page');
    var h1 = $('<h1></h1>');
    var h3 = $('<h3></h3>');
    var link = $('<a href="' + hashLocation + '"></a>');
    var button = $('<button></button>');
    h1.text(title);
    container.append(h1);
    // console.log(h1);
    h3.text(sub);
    container.append(h3);
    container.append(link.append(button));
    // button.text(buttonText);
    // link.append(button);
    button.append(buttonText);
    // container.append(button);
    button.on('click', function(e) {
        console.log('hello');
        // console.log('location: ' + location.hash);
        // console.log(button);
        // console.log(button.textContent);
        if (button.innerText === 'Let\'s Battle') {
          console.log('hi');
          // location.hash = '#characterSelect';
          // checkHash('#characterSelect');
        } else if(button.innerText === 'Battle Again'){
          checkHash(' ');
        }
        // if button.innerText says Let's Battle
        // button click should change the hash to character select
        // else if  button.innertext says Battle Again
        // button click should change the hash to ' '
});
}


function checkHash() {
  $('.Splash-Page').empty();
    if (location.hash === '') {
      renderHome('Battle Game', 'Start New Game', 'Let\'s Battle', '#characterSelect');
    }else if( location.hash === '#characterSelect') {
      console.log('pick your poison');
    } else if (location.hash === '#battle') {


    } else if (location.hash === '#gameOver') {
      renderHome('Game Over', 'Player1 win/loss', 'Battle Again', ' ');
    }
// });
}



// var container = $('container');
// var h1 = $('<h1></h1>');
// var h2 = $('<span></span>');
// var battleAgainButton = $('<button></button>');
// h1.text('Battle Game');
// container.append(h1);
// console.log(h1);
// h2.text('Game Over');
// container.append(h2);
// battleAgainButton.text('Battle Again');
// container.append(battleAgainButton);


$(window).on('hashchange', function(e) {
    console.log(location.hash);
    checkHash();
});
checkHash();
