window.onload = init();

function init() {

    // ========= Breakout Game =========
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');
    btnStartBreakoutGame.addEventListener('click', startBreakoutGame, false);
}



var ballX;
var ballY;
var ballDX = 2;
var ballDY = -2;
var breakoutCanvas;
var breakoutCtx;


function startBreakoutGame() {
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');

    /* So that players cannot (accidentally) restart the game. */
    btnStartBreakoutGame.disabled = true;


    breakoutCanvas = document.querySelector('#breakout-canvas');

    // It's possible that some pages do not have the Breakout-Game
    if (breakoutCanvas) {
        breakoutCtx = breakoutCanvas.getContext('2d');

        ballX = breakoutCanvas.width / 2;
        ballY = breakoutCanvas.height - 30;

        /*
          Create anonymous function so actual function isn't
          executed right away.
          Otherwise setInterval() doesn't work.
        */
        setInterval(function () { drawBreakoutGame(); }, 10);
    }
}


function drawBreakoutGame() {
    breakoutCtx.clearRect(0, 0, breakoutCanvas.width, breakoutCanvas.height);

    drawBall();
}


function drawBall() {
    breakoutCtx.beginPath();
    breakoutCtx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    breakoutCtx.fillStyle = '#FF0000';
    breakoutCtx.fill();
    breakoutCtx.closePath();

    ballX += ballDX;
    ballY += ballDY;
}