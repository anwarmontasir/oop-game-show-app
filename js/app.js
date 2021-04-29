let game;
let gameStarted = false;
/* find start button */
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', e => {
    /* reset game (if this isn't the first game) */
    if (gameStarted) {
        resetGame();
    }
    /* create instance of Game class */
    game = new Game();
    /* call startGame method */
    game.startGame();
    /* game has started */
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
        keys.forEach(key => {
            /* find key in DOM that matches keypress and make sure it isn't already disabled */
            if (key.innerHTML === e.key.toLowerCase() && !key.disabled) {
                game.handleInteraction(key, key.innerHTML);
            }
        });
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
    keys.forEach(key => {
        /* enable each key and remove added classes */
        key.disabled = false;
        key.classList.remove('chosen', 'wrong');
    });
    /* remove listeners */
    document.removeEventListener('keydown', handleClick);
    document.getElementById('qwerty').removeEventListener('click', handleKeyDown);
}