/* add click event listener to start game button */
const startButton = document.getElementById('btn__reset');

startButton.addEventListener('click', e => {
    /* create instance of Game class */
    const game = new Game();

    /* call startGame method */
    game.startGame();
});