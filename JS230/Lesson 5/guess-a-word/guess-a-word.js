
function generateRandomWords() {
    let words = ['hello', 'november', 'revolution', 'tsunami', 'normalcy', 'corruption'];
    words = ['hello', 'hello'];
    return function() { return words.splice(Math.floor(Math.random() * words.length), 1)[0]; }
}

function Game() {
    this.wordGenerator = generateRandomWords();
    this.word = '';
    this.totalGuesses = 6;

    this.init();
}

Game.prototype.init = function() {
    this.pickWord();
    if (!this.word) return;

    this.guesses = 0;
    this.guessedLetters = [];
    this.revealedLetters = 0;

    $('#apples').removeClass();
    $('#spaces span').remove();
    $('#guesses span').remove();
    $('#replay').hide();
    $('#message').hide();

    for(let i=0;i<this.word.length; i++) {
        let span = document.createElement('span');

        $('#spaces').append(span);
    }

    $(document).keydown(function(e) {
        if (e.keyCode < 65 || e.keyCode >  90) return;

        this.tryLetter(e.key);
    }.bind(this));
}

Game.prototype.pickWord = function() {
    this.word = this.wordGenerator();

    if (!this.word) {
        $('#message').text('Sorry, I\'ve run out of words!');
    }
}

Game.prototype.setupGame = function(msg) {
    $('#message').show().text(msg);
    $('#replay').show();
    $(document).unbind('keydown');
}

Game.prototype.tryLetter = function(letter) {
    if (this.guessedLetters.includes(letter)) return;

    let $guesses = $('#guesses');
    let span = document.createElement('span');
    span.textContent = letter;

    this.guessedLetters.push(letter);
    $guesses.append(span);

    if (this.word.split('').includes(letter)) {
        for (let i=0;i<this.word.length; i++) {
            if (this.word[i] === letter) {
                $(`#spaces span:nth-of-type(${i + 1})`).text(letter);
                this.revealedLetters++;
            }
        }
        if (this.revealedLetters === this.word.length) {
            this.setupGame('Congradulations! You win!!!');
        }
    } else {
        this.guesses++;
        if (this.totalGuesses === this.guesses) {
            $('#apples').removeClass('guess_5');
            $('#apples').addClass('guess_6');
            this.setupGame('Sorry! You\'re out of guesses');
            return;
        } else {
            $('#apples').addClass(`guess_${this.guesses}`);
            if (this.$guesses !== 1) $('#apples').removeClass(`guess_${this.guesses - 1}`);
        }
    }
}


$( () => {
    let game = new Game();

    $('#replay').click( e => {
        e.preventDefault();

        game.init();
    });
});