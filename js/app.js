/* find start button */
const startButton = document.getElementById('btn__reset');
let game;
let gameStarted = false;

startButton.addEventListener('click', e => {
    /* reset game */
    if (gameStarted) {
        resetGame();
    }
    /* create instance of Game class */
    game = new Game();
    /* call startGame method */
    game.startGame();
    
    gameStarted = true;
    /* handle clicks and key presses */
    document.getElementById('qwerty').addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
});

function handleClick(e) {
    /* add click event listener to onscreen keyboard buttons */
    if (e.target.className === 'key') {
        /* call handleInteraction */
        game.handleInteraction(e.target, e.target.innerHTML);
    };
}

function handleKeyDown(e) {
    /* was a letter pressed? */
    if (/^[a-zA-Z]+$/.test(e.key) && e.key.length === 1) {
        /* select dom elements with class 'key' */
        const keys = document.querySelectorAll('.key');
        for (let i = 0; i < keys.length; i++) {
            /* find key in DOM that matches keypress and make sure it isn't already disabled */
            if (keys[i].innerHTML === e.key.toLowerCase() && !keys[i].disabled) {
                game.handleInteraction(keys[i], keys[i].innerHTML);
            }
        }
    }
}

function resetGame() {
    document.getElementById('phrase').children[0].innerHTML = '';
    const hearts = document.getElementById('scoreboard').children[0].children;
    for (let i = 0; i < hearts.length; i++) {
        const heart = hearts[i].children[0];
        /* update src and alt attributes */
        heart.setAttribute('src', 'images/liveHeart.png');
        heart.setAttribute('alt', 'Blue Heart Icon');
    }
    const keys = document.querySelectorAll('.key');
    for (let i = 0; i < keys.length; i++) {
        keys[i].disabled = false;
        keys[i].classList.remove('chosen');
        keys[i].classList.remove('wrong');
    }

    /* remove listeners */
    document.removeEventListener('keydown', handleClick);
    document.getElementById('qwerty').removeEventListener('click', handleKeyDown);
}