// file: game.js

// Array of options for computer to choose
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables for number of wins, losses, guesses left, number of guesses taken
var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessNumber = [];

// Variable for when user presses a key
document.onkeyup = function (event) {

    // Which key was pressed     
    var userGuess = event.key.toLowerCase();

    guessNumber.push(userGuess);

    // Computer's randomized guess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // If statements
    if (userGuess == computerGuess) {
        wins++;
        // Resets for winning
        guessesLeft = 9;
        guessNumber.length = 0;
        // Alert for winning
        alert("Looks like you can read my mind after all...");
    }

    // If user runs out of guesses
    else if (guessesLeft == 0) {
        losses++;
        // Resets for losing
        guessesLeft = 9;
        guessNumber.length = 0;
        // Alert for losing
        alert("Don't quit your day job...");
    }

    // If user guesses wrong
    else if (userGuess !== computerGuess) {
        guessesLeft--;
    }

    

    // Reflecting in HTML file
    var html = "<h1>The Psychic Game!</h1>" +
    "<p>Guess what letter I am thinking of...</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" + 
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + guessNumber + "</p>";


    // Linking to game ID
    document.querySelector("#game").innerHTML = html;



}








