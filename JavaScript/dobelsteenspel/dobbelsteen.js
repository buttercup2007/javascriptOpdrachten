
  const diceImages = [
    {src: "dice 1.jpg", value: 1},
    {src: "dice 2.jpg", value: 2},
    {src: "dice 3.jpg", value: 3},
    {src: "dice 4.jpg", value: 4},
    {src: "dice 5.jpg", value: 5},
    {src: "dice 6.jpg", value: 6}
];

let playerImage1, playerImage2, computerImage1, computerImage2;


function initializeDice() {
    if (!playerImage1) {
        playerImage1 = createDiceImage();
        playerImage2 = createDiceImage();
        computerImage1 = createDiceImage();
        computerImage2 = createDiceImage();

        document.getElementById("diceContainer1").appendChild(playerImage1);
        document.getElementById("diceContainer2").appendChild(playerImage2);
        document.getElementById("diceContainer3").appendChild(computerImage1);
        document.getElementById("diceContainer4").appendChild(computerImage2);
    }
}


function rolDobbelstenen() {
    initializeDice();

   
    const playerRoll1 = getRandomDiceRoll();
    const playerRoll2 = getRandomDiceRoll();
    const computerRoll1 = getRandomDiceRoll();
    const computerRoll2 = getRandomDiceRoll();

    
    playerImage1.classList.add("rolling");
    playerImage2.classList.add("rolling");
    computerImage1.classList.add("rolling");
    computerImage2.classList.add("rolling");

   
    setTimeout(function() {
       
        playerImage1.classList.remove("rolling");
        playerImage2.classList.remove("rolling");
        computerImage1.classList.remove("rolling");
        computerImage2.classList.remove("rolling");

       
        playerImage1.src = playerRoll1.src;
        playerImage2.src = playerRoll2.src;
        computerImage1.src = computerRoll1.src;
        computerImage2.src = computerRoll2.src;

        const playerScore = playerRoll1.value + playerRoll2.value;
        const computerScore = computerRoll1.value + computerRoll2.value;

        
        displayResult(playerScore, computerScore);
    }, 500); 
}


function getRandomDiceRoll() {
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
}


function createDiceImage() {
    const image = new Image();
    image.classList.add("dice"); 
    return image;
}


function displayResult(playerScore, computerScore) {
    const resultMessage = document.getElementById("resultMessage");

    if (playerScore > computerScore) {
        resultMessage.textContent = `Gefeliciteerd! Jij hebt gewonnen!`;
    } else if (playerScore < computerScore) {
        resultMessage.textContent = `Oh nee!, de computer heeft gewonnen`;
    } else {
        resultMessage.textContent = `Het is een gelijkspel!`;
    }
}
