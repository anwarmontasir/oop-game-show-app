/* add click event listener to start game button */
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', e => {
    /* create instance of Game class */
    game = new Game();

    /* call startGame method */
    game.startGame();

    /* handle clicks and key presses */
    handleClick(game);
    handleKeyDown(game);
});

function handleClick(game) {
    /* add click event listener to onscreen keyboard buttons */
    const keyboard = document.getElementById('qwerty');

    keyboard.addEventListener('click', e => {
        /* if an element with 'key' class is pressed */
        if (e.target.className === 'key') {
            /* call handleInteraction */
            game.handleInteraction(e.target, e.target.innerHTML);
        }
    });
}

function handleKeyDown(game) {
    /* add keyboard listener */
    document.addEventListener('keydown', e => {
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
    });
}