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
hint.innerHTML = "Hint: <b> </b>";
gameWrapper.appendChild(hint);

const guessesNumber = document.createElement("p");
guessesNumber.classList.add("guesses");
guessesNumber.innerHTML = "Incorrect guesses: <b>0 / 6 </b>";
gameWrapper.appendChild(guessesNumber);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
gameWrapper.appendChild(keyboard);

const buttonA = document.createElement("button");
buttonA.classList.add("letter");
buttonA.innerHTML = "a";
keyboard.appendChild(buttonA);

const buttonB = document.createElement("button");
buttonB.classList.add("letter");
buttonB.innerHTML = "b";
keyboard.appendChild(buttonB);

const buttonC = document.createElement("button");
buttonC.classList.add("letter");
buttonC.innerHTML = "c";
keyboard.appendChild(buttonC);

const buttonD = document.createElement("button");
buttonD.classList.add("letter");
buttonD.innerHTML = "d";
keyboard.appendChild(buttonD);

const buttonE = document.createElement("button");
buttonE.classList.add("letter");
buttonE.innerHTML = "e";
keyboard.appendChild(buttonE);

const buttonF = document.createElement("button");
buttonF.classList.add("letter");
buttonF.innerHTML = "f";
keyboard.appendChild(buttonF);

const buttonG = document.createElement("button");
buttonG.classList.add("letter");
buttonG.innerHTML = "g";
keyboard.appendChild(buttonG);

const buttonH = document.createElement("button");
buttonH.classList.add("letter");
buttonH.innerHTML = "h";
keyboard.appendChild(buttonH);

const buttonI = document.createElement("button");
buttonI.classList.add("letter");
buttonI.innerHTML = "i";
keyboard.appendChild(buttonI);

const buttonJ = document.createElement("button");
buttonJ.classList.add("letter");
buttonJ.innerHTML = "j";
keyboard.appendChild(buttonJ);

const buttonK = document.createElement("button");
buttonK.classList.add("letter");
buttonK.innerHTML = "k";
keyboard.appendChild(buttonK);

const buttonL = document.createElement("button");
buttonL.classList.add("letter");
buttonL.innerHTML = "l";
keyboard.appendChild(buttonL);

const buttonM = document.createElement("button");
buttonM.classList.add("letter");
buttonM.innerHTML = "m";
keyboard.appendChild(buttonM);

const buttonN = document.createElement("button");
buttonN.classList.add("letter");
buttonN.innerHTML = "n";
keyboard.appendChild(buttonN);

const buttonO = document.createElement("button");
buttonO.classList.add("letter");
buttonO.innerHTML = "o";
keyboard.appendChild(buttonO);

const buttonP = document.createElement("button");
buttonP.classList.add("letter");
buttonP.innerHTML = "p";
keyboard.appendChild(buttonP);

const buttonQ = document.createElement("button");
buttonQ.classList.add("letter");
buttonQ.innerHTML = "q";
keyboard.appendChild(buttonQ);

const buttonR = document.createElement("button");
buttonR.classList.add("letter");
buttonR.innerHTML = "r";
keyboard.appendChild(buttonR);

const buttonS = document.createElement("button");
buttonS.classList.add("letter");
buttonS.innerHTML = "s";
keyboard.appendChild(buttonS);

const buttonT = document.createElement("button");
buttonT.classList.add("letter");
buttonT.innerHTML = "t";
keyboard.appendChild(buttonT);

const buttonU = document.createElement("button");
buttonU.classList.add("letter");
buttonU.innerHTML = "u";
keyboard.appendChild(buttonU);

const buttonV = document.createElement("button");
buttonV.classList.add("letter");
buttonV.innerHTML = "v";
keyboard.appendChild(buttonV);

const buttonW = document.createElement("button");
buttonW.classList.add("letter");
buttonW.innerHTML = "w";
keyboard.appendChild(buttonW);

const buttonX = document.createElement("button");
buttonX.classList.add("letter");
buttonX.innerHTML = "x";
keyboard.appendChild(buttonX);

const buttonY = document.createElement("button");
buttonY.classList.add("letter");
buttonY.innerHTML = "y";
keyboard.appendChild(buttonY);

const buttonZ = document.createElement("button");
buttonZ.classList.add("letter");
buttonZ.innerHTML = "z";
keyboard.appendChild(buttonZ);









