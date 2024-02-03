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
middlePart.appendChild(middleCenterPart);

const boardWrapper = document.createElement("div");
boardWrapper.classList.add("board-wrapper");
middleCenterPart.appendChild(boardWrapper);

const board = document.createElement("div");
board.classList.add("board");
board.innerHTML = "Place for a board"
boardWrapper.appendChild(board);

const solutionBtn = document.createElement("button");
solutionBtn.classList.add("solution");
solutionBtn.innerText = "Show Solution";
boardWrapper.appendChild(solutionBtn);

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



class Square {
    constructor(game) {
        this.game = game;
        this.status = "unclicked"; 
        this.value = 0;
        this.handleClick = this.handleClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
        this.square = document.createElement('div');
        this.square.addEventListener('click', this.handleClick);
        this.square.addEventListener('contextmenu', this.handleRightClick);
    }

    handleClick() {
        switch (this.game.mouseMode) {
            case 'cursor': {
                if (this.status === 'filled') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'filled';
                    this.value = 1;
                }
                break;
            }
            default: {
                if (this.status === 'filled') {
                    this.status = 'unclicked';
                    this.value = 0;
                } else {
                    this.status = 'filled';
                    this.value = 1;
                }
                break;
            }
        }

        this.render();
        return;
    }

    handleRightClick(e) {
        e.preventDefault();
        if (this.status === 'exed') {
            this.status = 'unclicked';
            this.value = 0;
        } else {
            this.status = 'exed';
            this.value = 0;
        }
        this.render();
        return;
    }


    render() {
        this.square.classList.add("square");
        this.square.className += ` ${this.status}`;
        return this.square;
    }
}

let sq = new Square(this);

console.log(sq);


class Board {
    constructor(game, size, topNums, leftNums) {
        this.game = game;
        this.mouseMode = this.game.mouseMode;
        this.grid = this.makeGrid(size);
        this.populateGrid();

        this.topNums = topNums;
        this.leftNums = leftNums;
        this.board = document.querySelector(".board");
    }

    makeGrid(size) {
        let grid = [];
        for (let i = 0; i < size; i++) {
            grid.push(new Array(size));
        }
        return grid;
    }

    populateGrid() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let square = new Square(this.game);

                this.grid[i][j] = square;
            }
        }
    }

    findCurrentVals() {
        let vals = [];
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                let sq = this.grid[i][j];
                vals.push(sq.value);
            }
        }
        return vals.join('');
    }

    render() {
        this.board.innerHTML = ' ';
        if (!this.board) {
            console.log('NO Board');
        } else {
            let topNums = document.createElement('div');
            let leftNums = document.createElement('div');
            topNums.classList.add("topNums");
            leftNums.classList.add("leftNums");

            this.topNums.forEach((numArr) => {
                let nums = document.createElement('div');
                nums.innerHTML = numArr.join(' ');
                topNums.append(nums);
            });

            this.leftNums.forEach((numArr) => {
                let nums = document.createElement('div');
                nums.innerHTML = numArr.join(' ');
                leftNums.append(nums);
            });

            this.board.appendChild(topNums);
            this.board.appendChild(leftNums);

            let griddiv = document.createElement('div');
            griddiv.classList.add("grid");

            for (let i = 0; i < this.grid.length; i++) {
                let rowDiv = document.createElement('div');
                rowDiv.classList.add("row-div");
                for (let j = 0; j < this.grid[i].length; j++) {
                    let square = this.grid[i][j];
                    rowDiv.appendChild(square.render());
                }

                griddiv.appendChild(rowDiv);
            }
            this.board.appendChild(griddiv);

            return this.board;
        }
    }
}


class Level {
    constructor(name, size, valueString) {
        this.name = name;
        this.size = size;
        this.valueString = valueString;
        this.row = this.rowVals();
        this.col = this.colVals();
        this.topNums = this.getNums(this.col);
        this.leftNums = this.getNums(this.row);
        this.won = false;
    }

    rowVals() {
        let rowsArrays = [];

        let temp = [];
        for (let i = 0; i < this.valueString.length; i++) {
            if (temp.length < this.size) {
                temp.push(this.valueString[i]);
            }
            if (temp.length === this.size) {
                rowsArrays.push(temp);
                temp = [];
            } else if (i === this.valueString.length - 1) {
                rowsArrays.push(temp);
            }
        }

        return rowsArrays;
    }

    colVals() {
        let colsArrays = new Array(this.size);
        for (let i = 0; i < colsArrays.length; i++) {
            colsArrays[i] = [];
        }
        let i = 0;

        while (i < this.valueString.length) {
            let idx = i % this.size;

            colsArrays[idx].push(this.valueString[i]);
            i++;
        }

        return colsArrays;
    }

    getNums(vals) {
        let nums = [];

        for (let i = 0; i < vals.length; i++) {
            let temp = [];
            let count = 0;

            for (let j = 0; j < vals[i].length; j++) {
                if (vals[i][j] === '0') {
                    if (count !== 0) {
                        temp.push(count);
                    }
                    count = 0;
                }
                if (vals[i][j] === '1') {
                    count += 1;
                }
            }
            if (count !== 0) {
                temp.push(count);
            }
            if (temp.length > 0) {
                nums.push(temp);
            } else if (temp.length === 0) {
                nums.push([0]);
            }
        }

        return nums;
    }

    // revealPicture() {
    //     let pic = document.querySelector(`${this.name}`);
    //     // pic.className = 'solved';
    //     pic.innerHTML = "You won";
    // }
}


const tower = new Level('tower', 5, '1010111111011100101001110');

const board1 = new Board(this, tower.size, tower.topNums, tower.leftNums);

console.log(board1);

board1.render();




