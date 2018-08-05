var artists = ["zedsdead", "dmx", "skrillex", "glitchmob", "fluxpavilion", "sevenlions", "flume", "deltaheavy", "zhu", "avicii", "graves", "adventureclub", "clozee", "griz", "mommy", "mija"];

var wins = 0;
var losses = 0;
var letters = "";
var answer = [];
var guess = [];
var guesses = 5;


document.getElementById("clicky").addEventListener("click", function () {
    alert("You may begin!");
    pullArtist()

});
function pullArtist() {
    var currentWord = artists[Math.floor(Math.random() * artists.length)];
    answer = currentWord.split('');
    guess = '_'.repeat(answer.length).split('');
    document.getElementById("word").innerHTML = guess.join(' ');
    guesses = 5;
    document.getElementById("guesses").innerHTML = guesses;
    letters = "";
    document.getElementById("letters").innerHTML = letters;
    console.log(answer);
}

document.onkeyup = function (event) {

    var letter = event.key;
    if (answer.includes(letter)) {
        for (i = 0; i < answer.length; i++) {
            if (answer[i] === letter) {
                guess[i] = letter;
                document.getElementById("word").innerHTML = guess.join(' ');


                if (answer.toString() == guess.toString()) {
                    wins += 1;
                    document.getElementById("wins").innerHTML = wins;
                    alert("Congratulations, you won!")
                    pullArtist();
                }
            }
        }
    } else {
        letters += event.key;
        guesses -= 1;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("letters").innerHTML = letters;

    };

    if (letters.length === 5) {
        losses += 1;
        document.getElementById("losses").innerHTML = losses;
        alert("You have lost");
        pullArtist();

    }

}