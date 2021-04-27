class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }

    startGame() {
        console.log('start game!');
        /* hide start screen overlay, call getRandomPhrase, set activePhrase with chosen phrase, call addPhraseToDisplay */
    }

    getRandomPhrase() {
        /* randomly retrieve phrase from phrases array and return it */
    }

    handleInteraction() {
        /* checks to see if button clicked matches letter in phrase, then directs game based on correct or incorrect guess */
    }

    removeLife() {
        /* remove a life from scoreboard */
    }

    checkForWin() {
        /* has the player revealed all letters in active phrase */
    }

    gameOver() {
        /* display start screen overlay, win or loss message */
    }
}