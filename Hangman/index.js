const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const hangmanWrapper = document.createElement("div");
hangmanWrapper.classList.add("hangman-wrapper");
container.appendChild(hangmanWrapper);

const initialImg = document.createElement("img");
initialImg.src = "./img/hangman-0.svg";
initialImg.alt = "Основа висилицы";
hangmanWrapper.appendChild(initialImg);

const gameWrapper = document.createElement("div");
gameWrapper.classList.add("game-wrapper");
container.appendChild(gameWrapper);

const wordToGuess = document.createElement("ul");
wordToGuess.classList.add("word-to-guess");
gameWrapper.appendChild(wordToGuess);

const wordLetter = '<li class="word-letter"></li>';
wordToGuess.innerHTML = wordLetter.repeat(7);

const hint = document.createElement("p");
hint.classList.add("hint");
hint.classList.add("text");
hint.innerHTML = "Hint: <b> </b>";
gameWrapper.appendChild(hint);

const guessesNumber = document.createElement("p");
guessesNumber.classList.add("guesses");
guessesNumber.classList.add("text");
guessesNumber.innerHTML = "Incorrect guesses: <b>0 / 6 </b>";
gameWrapper.appendChild(guessesNumber);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
gameWrapper.appendChild(keyboard);

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.classList.add("letter");
    button.classList.add("button");
    button.innerText = String.fromCharCode(i);
    keyboard.appendChild(button);
}

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.append(modal);

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const loseGame = document.createElement("img");
loseGame.src = "./img/lost.gif";
loseGame.alt = "Вы проиграли";
modalContent.appendChild(loseGame);

const loseText = document.createElement("p");
loseText.classList.add("lose-text");
loseText.innerHTML = "Game over!";
modalContent.appendChild(loseText);

const correctWord = document.createElement("p");
correctWord.classList.add("correct-word");
correctWord.innerHTML = "The correct word was: <b> </b>";
modalContent.appendChild(correctWord);

const againBtn = document.createElement("button");
againBtn.classList.add("play-again");
againBtn.classList.add("button");
againBtn.innerHTML = "Play again";
modalContent.appendChild(againBtn);






