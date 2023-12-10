const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guess-time b strong");
const Guess = document.querySelector(".guess");
const Hangman = document.querySelector(".hangman img");
const popUp = document.querySelector(".pop-up");
const RestartBtn = document.querySelector(".restart");

let currentWord, correctLetters = [], wrongGuessCount = 0;
const maxGuess = 6;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    Hangman.src = `assets/imgs/hangman-${wrongGuessCount}.svg`;
    Guess.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(button => button.disabled = false);
    popUp.classList.remove("show");
    guessesText.innerText = `${wrongGuessCount} / ${maxGuess}`;


}

const getRandomWord = () => {
    const wordIndex = Math.floor(Math.random() * allOptions.length);
    currentWord = allOptions[wordIndex];
    const hint = allQ[wordIndex];
    console.log(currentWord);
    document.querySelector(".hint b").innerText = hint;

    // Reset the game before selecting a new word
    resetGame();

    Guess.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    Hangman.src = `assets/imgs/hangman-${wrongGuessCount}.svg`;
}


const gameOver = (isVictory) => {
    setTimeout(() => {
        const popUpText = isVictory ? `You found the word ` : `The correct word was `;
        popUp.querySelector("img").src = `assets/imgs/${isVictory ? 'win' : 'lose'}.gif`;
        popUp.querySelector("h4").innerText = `${isVictory ? 'Congratulations!' : 'Game Over!'}`;
        popUp.querySelector("p").innerHTML = `${popUpText} <b>${currentWord}</b>`;
        popUp.classList.add("show");
    }, 300);
}

const initGame = (button, clickedLetter) => {
    // check if it  is a correct letter
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                correctLetters.push(letter);
                Guess.querySelectorAll("li")[index].innerText = letter;
                Guess.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        Hangman.src = `assets/imgs/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuess}`;
    if(wrongGuessCount === maxGuess) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);

}

// keyboard buttons
for(let i = 97; i < 123; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

RestartBtn.addEventListener("click", getRandomWord);

