let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let snake = [];
snake[0] = {
    x: 4 * box,
    y: 4 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 64 * box, 64 * box);
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
