class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        /* add letter placeholders to the display when the game starts */
        let htmlToDisplay = '<ul>';
        
        const phraseArray = this.phrase.split('');

        phraseArray.forEach(letter => {
            if (letter === ' ') {
                htmlToDisplay += '<li class="space"> </li>';
            } else {
                htmlToDisplay += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });

        htmlToDisplay += '</ul>';

        document.getElementById('phrase').innerHTML = htmlToDisplay;
    }

    checkLetter(letter) {
        /* check to see if the letter selected by the player matches a letter in the phrase */
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        /* reveal the letter on the board that matches the player's selection */
        const phraseElements = document.getElementById('phrase').children[0].children;
        for (let i = 0; i < phraseElements.length; i++) {
            if(phraseElements[i].classList.contains(letter)) {
                phraseElements[i].classList.remove('hide');
                phraseElements[i].classList.add('show');
            };
        }
    }

    disableLetter(btnPressed, style) {
        btnPressed.disabled = true;
        btnPressed.classList.add(style); 
    }
}