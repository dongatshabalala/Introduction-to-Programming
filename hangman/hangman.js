"use strict";
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guess;
let lives = 3;
// THE MAIN GAME LOOP
while (remainingLetters > 0 && lives > 0) {
    // show player progress
    alert(answerArray.join(" "));
    guess = prompt(`Guess a single letter or click 'Cancel' to exit.\n You have ${lives} lives left.`);
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only!");

    } else {
        guess = guess.toLowerCase();
        let correctGuesses = 0;

        for (let j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    correctGuesses++;
                    remainingLetters--;
                } else {
                    alert(`You have already guessed the letter ${guess}.`)
                    correctGuesses++;
                    break;
                }


            }
        }

        if (correctGuesses === 0) {
            lives--;
        }

    }// SORRY TO SEE YOU LEAVE LOOPING IS WRONG FOR THAT, IT DOES NOT RUN
}
// AFTER THE WHILE LOOP
if (guess === null) {
    alert(`Sorry to see you leaving.\nThe answer was ${word}`);
} else if (remainingLetters === 0)
{alert(`Congratulations! You are a blimming wordsmith. The word is ${word}.`);
} else {
    alert(`Sorry, go learn some more vocabulary, you ran out of guesses.\nThe word was ${word}`);

}

// DEBUGGING IS GOING TO BE A PROBLEM
