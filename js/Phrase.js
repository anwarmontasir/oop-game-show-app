class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        /* find ul to append letters to */
        const targetUL = document.getElementById('phrase').children[0];
        /* split phrase into array */
        const phraseArray = this.phrase.split('');
        /* append space or letter */
        phraseArray.forEach(letter => {
            if (letter === ' ') {
                targetUL.innerHTML += '<li class="space"> </li>';
            } else {
                targetUL.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
            }
        });
    }

    checkLetter(letter) {
        /* does letter selected by player match a letter in the phrase? */
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        /* find HTMLCollection of letter lis */
        const phraseElements = document.getElementById('phrase').children[0].children;
        for (let i = 0; i < phraseElements.length; i++) {
            /* if li has a class that matches letter, show it */
            if(phraseElements[i].classList.contains(letter)) {
                phraseElements[i].classList.remove('hide');
                phraseElements[i].classList.add('show');
            };
        }
    }

    disableLetter(btnPressed, style) {
        /* disable pressed button and add appropriate style */
        btnPressed.disabled = true;
        btnPressed.classList.add(style); 
    }
}