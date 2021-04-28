let game;

/* add click event listener to start game button */
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', e => {
    /* create instance of Game class */
    game = new Game();

    /* call startGame method */
    game.startGame();
});

/* add click event listener to onscreen keyboard buttons */
const qwerty = document.getElementById('qwerty');

qwerty.addEventListener('click', e => {
    /* if an element with 'key' class is pressed */
    if (e.target.className === 'key') {
        /* call handleInteraction */
        game.handleInteraction(e.target.innerHTML);
    }
});