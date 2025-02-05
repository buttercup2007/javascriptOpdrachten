
let winningNumber = Math.floor(Math.random() * 10) + 1;

let numberGuessed = parseInt(prompt("Guess the number (1 to 10):"));


while (numberGuessed !== winningNumber) {
    if (numberGuessed > winningNumber) {
        alert("Too high! Try again.");
    } else if (numberGuessed < winningNumber) {
        alert("Too low! Try again.");
    }
    
    numberGuessed = parseInt(prompt("Guess the number (1 to 10):"));
}

alert("You guessed it! The number was " + winningNumber + ".");
