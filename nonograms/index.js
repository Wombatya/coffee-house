const container = document.createElement("div");
container.classList.add("container");
document.body.append(container);

const upperPart = document.createElement("div");
upperPart.classList.add("upper-part");
container.appendChild(upperPart);

const upperWrapper = document.createElement("div");
upperWrapper.classList.add("upper-wrapper");
upperPart.appendChild(upperWrapper);

const timer = document.createElement("div");
timer.classList.add("timer");
timer.innerHTML = "XX : XX";
upperWrapper.appendChild(timer);

const darkTheme = document.createElement("div");
darkTheme.classList.add("dark-theme");
upperWrapper.appendChild(darkTheme);

const checkbox = document.createElement("INPUT");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "dark");
darkTheme.appendChild(checkbox);

const label = document.createElement("label");
label.setAttribute("for", "dark");
label.innerText = "Dark Theme";
darkTheme.appendChild(label);

const middlePart = document.createElement("div");
middlePart.classList.add("middle-part");
container.appendChild(middlePart);

const middleLeftPart = document.createElement("div");
middleLeftPart.classList.add("middle-left-part");
middlePart.appendChild(middleLeftPart);

const levelsBtn = document.createElement("button");
levelsBtn.classList.add("levels");
levelsBtn.innerText = "Levels";
middleLeftPart.appendChild(levelsBtn);

const randomBtn = document.createElement("button");
randomBtn.classList.add("random");
randomBtn.innerText = "Random Game";
middleLeftPart.appendChild(randomBtn);

const middleCenterPart = document.createElement("div");
middleCenterPart.classList.add("middle-center-part");
middleCenterPart.innerHTML = "Place for board";
middlePart.appendChild(middleCenterPart);

const middleRightPart = document.createElement("div");
middleRightPart.classList.add("middle-right-part");
middlePart.appendChild(middleRightPart);

const saveBtn = document.createElement("button");
saveBtn.classList.add("save");
saveBtn.innerText = "Save Game";
middleRightPart.appendChild(saveBtn);

const continueBtn = document.createElement("button");
continueBtn.classList.add("continue");
continueBtn.innerText = "Continue Last Game";
middleRightPart.appendChild(continueBtn);

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
resetBtn.innerText = "Reset Game";
middleRightPart.appendChild(resetBtn);

const lowerPart = document.createElement("div");
lowerPart.classList.add("lower-part");
container.appendChild(lowerPart);

const solutionBtn = document.createElement("button");
solutionBtn.classList.add("solution");
solutionBtn.innerText = "Show Solution";
lowerPart.appendChild(solutionBtn);
