class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'Kermit The Frog',
            'Miss Piggy',
            'Fozzie Bear',
            'Gonzo the Great',
            'Doctor Teeth and the Electric Mayhem'
        ];
        this.activePhrase = null;
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

    handleInteraction(btnPressed, letter) {
        /* if phrase contains letter */
        if (this.activePhrase.checkLetter(letter)) {
            /* show matched letter */
            this.activePhrase.showMatchedLetter(letter);
            /* disable letter (add .chosen class) */
            this.activePhrase.disableLetter(btnPressed, 'chosen');
            /* check for win */
            this.checkForWin();
        } else {
            /* disable letter (add .wrong class) */
            this.activePhrase.disableLetter(btnPressed, 'wrong');
            console.log('WHAT IS', this.missed);
            console.log('WHAT PHRASE', this.activePhrase.phrase);
            /* remove life */
            this.removeLife();
        }
    }

    removeLife() {
        /* find current heart in DOM */
        const heart = document.getElementById('scoreboard').children[0].children[this.missed].children[0];
        /* update src and alt attributes */
        heart.setAttribute('src', 'images/lostHeart.png');
        heart.setAttribute('alt', 'Grey Heart Icon');
        /* increase missed score */
        this.missed += 1;
        console.log('THIS IS',this.missed);
        /* if missed score = 5, end game */
        if (this.missed === 5) {
            this.gameOver('lose', 'Better luck next time :(');
        }
    }
 
    checkForWin() {
        /* are there hidden letters left in the DOM? */
        let noHiddenLettersFound = true;
        /* select all elements with the .letter class */
        const letters = document.querySelectorAll('.letter');
        for (let i=0; i<letters.length; i++) {
            /* if any letters contain the class .hide, game isn't over */
            if (letters[i].classList.contains('hide')) {
                noHiddenLettersFound = false;
            }
        }
        /* if no hidden letters found, end game */
        if (noHiddenLettersFound) {
            this.gameOver('win', `You win! ${this.activePhrase.winningPhrase} is correct :)`);
        }
    }

    gameOver(status, message) {
        /* show start screen overlay */
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').classList.add(status);
        document.getElementById('game-over-message').innerHTML = message;
    }
}