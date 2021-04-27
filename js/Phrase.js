class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        /* add letter placeholders to the display when the game starts */
        let htmlToDisplay = '<div id="phrase" class="section"><ul>';
        
        const phraseArray = this.phrase.split('');

        phraseArray.forEach(letter => {
            if (letter === ' ') {
                htmlToDisplay += '<li class="space"> </li>';
            } else {
                htmlToDisplay += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });

        htmlToDisplay += '</ul></div>';
    }

    checkLetter() {
        /* check to see if the letter selected by the player matches a letter in the phrase */
    }

    showMatchedLetter() {
        /* reveal the letter on the board that matches the player's selection */
    }
}