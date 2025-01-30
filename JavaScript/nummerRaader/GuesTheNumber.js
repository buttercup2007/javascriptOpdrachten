//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
let numberGuessed = prompt("Raad het getal (1 tot en met 10)");
console.log(numberGuessed);

let winningNumber = 4;




while(numberGuessed != winningNumber) {
    if(numberGuessed > winningNumber ){
        alert("You failed me...");
        numberGuessed = prompt("Raad het getal (1 tot en met 10)");
    }
    
    else if(numberGuessed < winningNumber) {
        alert("You failed me...");
        numberGuessed = prompt("Raad het getal (1 tot en met 10)");
    }
}

    alert("You did it!")
