var artists = ["Zeds Dead", "Snoop Dogg", "RL Grime", "Skrillex", "Keys N Krates", "Flux Pavilion", "Seven Lions", "Kill the Noise", "Delta Heavy", "Zhu", "Oliver Heldens", "Anna Lunoe", "Adventure Club", "Clozee", "Armin van Buuren", "Big Gigantic"];


var currentWord = "c";
var wins = 0;
var losses = 0;
var letters = ""



document.onkeyup = function (event) {
    // document.write(event.key);

    letters += event.key;
    document.getElementById("letters").innerHTML = letters;

    // for (i = 0; letters.length; ++) {
    //     alert("You have lost");
    // }

    if (letters.length === 5) {
        alert("You have lost");
        // program.restart();
    }



    // document.getElementById("word")


    // document.getElementById("Wins")
    // document.getElementById("Losses")

}