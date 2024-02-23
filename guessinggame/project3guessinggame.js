// let secret = 7;
// let answer = prompt (“Please guess the secret number (1-20)”);
// // Convert the string guess to an integer so that we can compare
// var guess = parseInt (answer);

// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!
// How can you combine line 2 and 3 into one line
// Expand the program to do this in a while loop, only exiting when the guess was correct
// While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”.
// When you are done make the secret number random.

let secret = 7;
let answer = prompt("Please guess the secret number (1-20).");

// CONVERTING STRING GUESS TO AN INTEGER SO THAT WE CAN COMPARE

let guess = parseInt(answer);

// CHECKING IF GUESS IS CORRECT

// if (guess === secret) {
//     document.write("Correct Guess!");
// } else {
//     document.write("Sorry, incorrect Guess!");
// }

// HOW CAN I COMBINE LINE 2 AND 3 INTO ONE LINE
// LINE 2 AND 3 CAN BE COMBINED AS FOLLOWS:

// let guess = parseInt(prompt("Please guess the secret number (1-20).")); THE CODE HAS BEEN COMMENTED OUT TO PREVENT ANY CLASHES WHEN RUNNING.

// EXPANDING THE CODE TO FUNCTION IN A WHILE LOOP

// while (guess >= 1 && guess <= 20) {
//     if (guess === secret) {
//         document.write("Correct Guess!");
//         break;
//     } else {
//         document.write("Sorry, incorrect Guess!");
//         break;
//     }
// }

// TESTING TO SEE IF THE INCORRECT GUESS IS TOO HIGH OR TOO LOW

while (guess >= 1 && guess <= 20) {

    if (guess === secret) {
        document.write("Correct Guess!");
        break;
    } else if (guess < secret) {
        document.write("Incorrect, too low.");
        break;
    } else {
        document.write("Incorrect, too high.");
        break;
    }
}

// MAKING THE SECRET NUMBER RANDOM

let randomSecretNumber = Math.floor(Math.random()*20) + 1;
