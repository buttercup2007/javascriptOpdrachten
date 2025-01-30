let selectedWord;
let guessedLetters = [];
let wrongLetters = [];
let remainingAttempts = 3;

function startGame() {
  const inputWordElement = document.getElementById('inputWord');
  selectedWord = inputWordElement.value.toLowerCase();

  
  if (!selectedWord) {
    alert("Please enter a word!");
    return;
  }

 
  document.getElementById('inputWordSection').style.display = "none";
  document.getElementById('gameSection').style.display = "block";


  guessedLetters = [];
  wrongLetters = [];
  remainingAttempts = 3;


  document.getElementById('message').textContent = "";
  document.getElementById('remainingAttempts').textContent = remainingAttempts;
  document.getElementById('wrongGuesses').textContent = wrongLetters.join(', ');
  displayWord();
}

function displayWord() {
  let display = "";
  for (let i = 0; i < selectedWord.length; i++) {
    if (guessedLetters.includes(selectedWord[i])) {
      display += selectedWord[i] + " ";
    } else {
      display += "_ ";
    }
  }
  document.getElementById('wordDisplay').textContent = display.trim();
}

function makeGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value.toLowerCase();
  guessInput.value = ""; 

  if (guess === "") return; 

 
  if (guessedLetters.includes(guess) || wrongLetters.includes(guess)) {
    document.getElementById('message').textContent = "You already tried this letter!";
    return;
  }


  if (selectedWord.includes(guess)) {
    guessedLetters.push(guess);
    displayWord();
    checkGameStatus();
  } else {
  
    wrongLetters.push(guess);
    remainingAttempts--;
    document.getElementById('wrongGuesses').textContent = wrongLetters.join(', ');
    document.getElementById('remainingAttempts').textContent = remainingAttempts;
    checkGameStatus();
  }
}

function checkGameStatus() {
 
  if (guessedLetters.length === [...new Set(selectedWord.split(''))].length) {
    document.getElementById('message').textContent = "You won! The word is " + selectedWord + ".";
    document.getElementById('guessInput').disabled = true; 
    return;
  }


  if (remainingAttempts <= 0) {
    document.getElementById('message').textContent = `You lost! The word was "${selectedWord}".`;
    document.getElementById('guessInput').disabled = true; 
  }
}

window.onload = () => {
  document.getElementById('startButton').addEventListener('click', startGame); 
};
