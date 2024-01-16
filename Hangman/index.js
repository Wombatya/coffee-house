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

const hangmanImgUpdate = document.querySelector(".hangman-wrapper img");

let wrongGuessesCount = 0;
let guessedLetters = [];

function gameOver(useAllTries) {
  setTimeout(() => {
    modal.classList.add("show");
    document.removeEventListener("keydown", physicalKeyboard);
    document.querySelector(".correct-word b").innerText = `${currentWord}`;
    if (useAllTries) {
      endGame.src = "./img/lost.gif";
      endGame.alt = "Вы проиграли";
      endText.innerHTML = "Game over!";
    } else {
      endGame.src = "./img/victory.gif";
      endGame.alt = "Вы победили";
      endText.innerHTML = "You win!";
    }
    modalContent.appendChild(againBtn);
  }, 200);
}

function physicalKeyboard(event) {
  keys.forEach((el) => {
    if (el === event.code) {
if (!(guessedLetters.includes(event.code[3].toLowerCase()))) {
if (currentWord.includes(event.code[3].toLowerCase())) {
[...currentWord].forEach((letter, i) => {
  if (letter === event.code[3].toLowerCase()) { 
    guessedLetters.push(letter);
    wordToGuess.querySelectorAll("li")[i].innerText = letter;
    wordToGuess.querySelectorAll("li")[i].classList.add("guessed");
  }
});
} else {
wrongGuessesCount++;
hangmanImgUpdate.src = `./img/hangman-${wrongGuessesCount}.svg`;
}
}

let buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
if (el.innerText === event.code[3]) {
  el.classList.add("disabled");
  el.setAttribute("disabled", "");
}
});
document.querySelector(".guesses b").innerText = `${wrongGuessesCount} / 6`;

if (wrongGuessesCount === 6) {
return gameOver(true);
}
if (guessedLetters.length === currentWord.length) {
return gameOver(false);
}
}
})
}

function keybordActive() {
  document.addEventListener("keydown", physicalKeyboard);
  }

function initGame(button, clickedLetter) {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, i) => {
      if (letter === clickedLetter) {
        guessedLetters.push(letter);
        wordToGuess.querySelectorAll("li")[i].innerText = letter;
        wordToGuess.querySelectorAll("li")[i].classList.add("guessed");
      }
    });
  } else {
    wrongGuessesCount++;
    hangmanImgUpdate.src = `./img/hangman-${wrongGuessesCount}.svg`;
  }
  button.classList.add("disabled");
  button.setAttribute("disabled", "");
  document.querySelector(".guesses b").innerText = `${wrongGuessesCount} / 6`;

  if (wrongGuessesCount === 6) {
    return gameOver(true);
  }
  if (guessedLetters.length === currentWord.length) {
    return gameOver(false);
  }
}

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.classList.add("letter");
  button.classList.add("button");
  button.innerText = String.fromCharCode(i);
  keyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.append(modal);

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const endGame = document.createElement("img");
endGame.src = "./img/lost.gif";
endGame.alt = "Вы проиграли";
modalContent.appendChild(endGame);

const endText = document.createElement("p");
endText.classList.add("end-game-text");
endText.innerHTML = "Game over!";
modalContent.appendChild(endText);

const correctWord = document.createElement("p");
correctWord.classList.add("correct-word");
correctWord.innerHTML = "The correct word was: <b> </b>";
modalContent.appendChild(correctWord);

const againBtn = document.createElement("button");
againBtn.classList.add("play-again");
againBtn.classList.add("button");
againBtn.innerHTML = "Play again";

const wordList = [
  {
    word: "mountain",
    hint: "A raised part of the earth's surface, much larger than a hill, the top of which might be covered in snow.",
  },
  {
    word: "glass",
    hint: "A hard, transparent material, used to make windows, bottles, and other objects.",
  },
  {
    word: "answer",
    hint: "A reaction to a question, letter, phone call, etc.",
  },
  {
    word: "candy",
    hint: "A sweet food made from sugar or chocolate.",
  },
  {
    word: "caterpillar",
    hint: "A small, long animal with many legs that feeds on the leaves of plants, and develops into a butterfly.",
  },
  {
    word: "geography",
    hint: "The study of the systems and processes involved in the world's weather, mountains, seas, lakes, etc.",
  },
  {
    word: "bird",
    hint: "A creature with feathers and wings, usually able to fly.",
  },
  {
    word: "sunrise",
    hint: "The time in the morning when the sun starts to rise in the sky.",
  },
  {
    word: "comedy",
    hint: "A (type of) film, play, or book that is intentionally funny either in its characters or its action.",
  },
  {
    word: "star",
    hint: "A very large ball of burning gas in space that is usually seen from the earth as a point of light in the sky at night.",
  },
  {
    word: "choir",
    hint: "A group of people who sing together.",
  },
  {
    word: "lake",
    hint: "A large area of water surrounded by land and not connected to the sea except by rivers or streams.",
  },
  {
    word: "landscape",
    hint: "A view or picture of the countryside, or the art of making such pictures.",
  },
  {
    word: "bookmark",
    hint: "A piece of thick paper, leather, or plastic that you put between the pages of a book so that you can find a page again quickly.",
  },
  {
    word: "morality",
    hint: "A set of personal or social standards for good or bad behaviour and character.",
  },
  {
    word: "chemistry",
    hint: "The scientific study of the basic characteristics of substances and the ways in which they react or combine.",
  },
  {
    word: "snowboard",
    hint: "A specially shaped board that you stand on to slide down a snow-covered slope.",
  },
  {
    word: "thunder",
    hint: "The sudden loud noise that comes from the sky especially during a storm.",
  },
  {
    word: "barrel",
    hint: "A large container, made of wood, metal, or plastic, with a flat top and bottom, often used for wine.",
  },
  {
    word: "glue",
    hint: "A sticky substance that is used for joining things together.",
  },
  {
    word: "opera",
    hint: "A musical play in which most of the words are sung.",
  },
  {
    word: "wardrobe",
    hint: "A tall cupboard in which you hang your clothes.",
  },
  {
    word: "envelope",
    hint: "A flat, usually square or rectangular, paper container for a letter.",
  },
  {
    word: "camomile",
    hint: "A plant whose white and yellow flowers are used to make tea.",
  },
  {
    word: "jewelry",
    hint: "Decorative objects worn on your clothes or body that are usually made from valuable metals.",
  },
  {
    word: "binoculars",
    hint: "A pair of tubes with glass lenses at either end that you look through to see things far away more clearly.",
  },
  {
    word: "dessert",
    hint: "Sweet food eaten at the end of a meal.",
  },
  {
    word: "perception",
    hint: "A belief or opinion, often held by many people and based on how things seem.",
  },
  {
    word: "imagination",
    hint: "The ability to form pictures in the mind.",
  },
  {
    word: "savings",
    hint: "The money that you keep in an account in a bank or similar financial organization.",
  },
];

let currentWord;

function resetGame() {
  guessedLetters = [];
  wrongGuessesCount = 0;
  wordToGuess.innerHTML = currentWord
    .split("")
    .map(() => `<li class="word-letter"></li>`)
    .join("");
  modal.classList.remove("show");
  hangmanImgUpdate.src = `./img/hangman-${wrongGuessesCount}.svg`;
  document.querySelector(".guesses b").innerText = `${wrongGuessesCount} / 6`;
  keyboard
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("disabled"));
  keyboard
    .querySelectorAll("button")
    .forEach((btn) => btn.removeAttribute("disabled"));
}

function getWord() {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  document.querySelector(".hint b").innerText = hint;
  keybordActive();
  resetGame();
}

const keys = [
  "KeyA",
  "KeyB",
  "KeyC",
  "KeyD",
  'KeyE',
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyI",
  "KeyJ",
  "KeyK",
  "KeyL",
  "KeyM",
  "KeyN",
  "KeyO",
  "KeyP",
  "KeyQ",
  "KeyR",
  "KeyS",
  "KeyT",
  "KeyU",
  "KeyV",
  "KeyW",
  "KeyX",
  "KeyY",
  "KeyZ",
];

getWord();
againBtn.addEventListener("click", getWord);
