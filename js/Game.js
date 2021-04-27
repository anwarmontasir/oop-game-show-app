class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = [
            'Phrase One',
            'Phrase Two',
            'Phrase Three',
            'Phrase Four',
            'Phrase Five'
        ];
        this.activePhrase = activePhrase;
    }

    startGame() {
        /* hide start screen overlay */
        document.getElementById('overlay').style.display = 'none';

        /* call getRandomPhrase, set activePhrase with chosen phrase */
        const activePhrase = new Phrase(this.getRandomPhrase());

        /* call addPhraseToDisplay */
        activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        /* randomly retrieve phrase from phrases array and return it */
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    handleInteraction(btnPressed) {
        console.log(btnPressed);
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