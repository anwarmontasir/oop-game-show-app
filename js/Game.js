class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = [
            'Kermit The Frog',
            'Miss Piggy',
            'Fozzie Bear',
            'Gonzo the Great',
            'Doctor Teeth and the Electric Mayhem'
        ];
        this.activePhrase = activePhrase;
    }

    startGame() {
        /* hide start screen overlay */
        document.getElementById('overlay').style.display = 'none';

        /* call getRandomPhrase, set activePhrase with chosen phrase */
        this.activePhrase = new Phrase(this.getRandomPhrase());

        /* call addPhraseToDisplay */
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        /* randomly retrieve phrase from phrases array and return it */
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }

    handleInteraction(btnPressed) {
        btnPressed.disabled = true;
        /* checks to see if button clicked matches letter in phrase, then directs game based on correct or incorrect guess */
        const letter = btnPressed.innerHTML;
        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);
            this.activePhrase.disableLetter(btnPressed, 'chosen');
        } else {
            this.removeLife();
            this.activePhrase.disableLetter(btnPressed, 'wrong');
        }
    }

    removeLife() {
        const heart = document.getElementById('scoreboard').children[0].children[this.missed].children[0];
        heart.setAttribute('src', 'images/lostHeart.png');
        heart.setAttribute('alt', 'Grey Heart Icon');
        
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('you lose');
        }
    }
 
    checkForWin() {
        /* has the player revealed all letters in active phrase */
    }

    gameOver(message) {
        /* display start screen overlay, win or loss message */
        console.log(message)
    }
}