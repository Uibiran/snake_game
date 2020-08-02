let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 16;
let snake = [];
snake[0] = {
    x: 4 * box,
    y: 4 * box
}

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 32 * box, 32 * box);
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();