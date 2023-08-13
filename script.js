// Made by Prachi Goyal

// Get speed from level
function getSpeedFromLevel() {
    const selectedLevel = levelSelector.value;
    let speed;
    switch (selectedLevel) {
        case 'very-easy':
            speed = 150;
            break;
        case 'easy':
            speed = 125;
            break;
        case 'medium':
            speed = 100;
            break;
        case 'hard':
            speed = 75;
            break;
        case 'very-hard':
            speed = 50;
            break;
        default:
            speed = 100;
    }
    return speed;
}

const levelSelector = document.getElementById('level');
levelSelector.addEventListener('keydown', function(e) {
    e.preventDefault();
});

levelSelector.addEventListener('change', function() {
    clearInterval(setIntervalId);
    setIntervalId = setInterval(initGame, getSpeedFromLevel());
});

const playBoard = document.querySelector(".prachigoyal__play-board");
const scoreElement = document.querySelector(".prachigoyal__score");
const highScoreElement = document.querySelector(".prachigoyal__high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
    // Passing a random 1 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Oops! Looks like the snake bit off more than it could chew. Ready for another round? Click on OK..");
    location.reload();
}

const changeDirection = e => {
    levelSelector.disabled = true;

    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if(gameOver) return handleGameOver();
    let html = `<div class="prachigoyal__food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Updating the snake's head position based on the current velocity
    
    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0) {
        snakeX = 30;
    } else if(snakeX > 30) {
        snakeX = 1;
    } else if(snakeY <= 0) {
        snakeY = 30;
    } else if(snakeY > 30) {
        snakeY = 1;
    }
    
    
let prevSnakeX = snakeX;
let prevSnakeY = snakeY;

    snakeX += velocityX;

for (let i = 0; i < snakeBody.length; i++) {
    // Checking if the snake head hit the body, if so set gameOver to true
    if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
        gameOver = true;
    }
}

    snakeY += velocityY;
    
    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    
snakeBody[0] = [prevSnakeX, prevSnakeY];
 // Setting first element of snake body to current snake position


    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        html += `<div class="prachigoyal__head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

updateFoodPosition();
setIntervalId = setInterval(initGame, getSpeedFromLevel());
document.addEventListener("keydown", changeDirection);