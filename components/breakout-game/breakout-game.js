window.onload = init();

function init() {

    // ========= Breakout Game =========
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');
    btnStartBreakoutGame.addEventListener('click', startBreakoutGame, false);
}




var breakoutCanvas;
var breakoutCtx;

class Ball {
    constructor(ballX, ballY) {
        this.ballX = ballX;
        this.ballY = ballY;
        this.ballDX = 2;
        this.ballDY = -2;
        this.ballRadius = 10;
    }

    drawBall() {
        breakoutCtx.beginPath();
        breakoutCtx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
        breakoutCtx.fillStyle = '#FF0000';
        breakoutCtx.fill();
        breakoutCtx.closePath();

        /*
          Important:
          With collision detection, the outer point of an object must always 
          be taken into account and *not* the center! 
          This means that the radius must be taken into account for a ball or circle.
        */

        // Collision Detection: Y-Coordinate (Top & Bottom)
        if (this.ballY + this.ballDY < this.ballRadius || this.ballY + this.ballDY > breakoutCanvas.height - this.ballRadius) {
            this.ballDY = -this.ballDY;
        }

        // Collision Detection: X-Coordinate (Left & Right)
        if (this.ballX + this.ballDX < this.ballRadius || this.ballX + this.ballDX > breakoutCanvas.width - this.ballRadius) {
            this.ballDX = -this.ballDX;
        }

        this.ballX += this.ballDX;
        this.ballY += this.ballDY;
    }
}



function startBreakoutGame() {
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');

    /* So that players cannot (accidentally) restart the game. */
    btnStartBreakoutGame.disabled = true;


    breakoutCanvas = document.querySelector('#breakout-canvas');

    // It's possible that some pages do not have the Breakout-Game
    if (breakoutCanvas) {
        breakoutCtx = breakoutCanvas.getContext('2d');

        const ball = new Ball(breakoutCanvas.width / 2, breakoutCanvas.height - 30);

        /*
          Create anonymous function so actual function isn't
          executed right away.
          Otherwise setInterval() doesn't work.
          
          // TODO: Use requestAPIFrame something like that for animation instead of interval
        */
        setInterval(function () { drawBreakoutGame(ball); }, 10);
    }
}


function drawBreakoutGame(ball) {
    /*
      Improve in future: 
      Use array of balls to draw multiple balls at once
      if player wants a harder difficulty.
    */
    breakoutCtx.clearRect(0, 0, breakoutCanvas.width, breakoutCanvas.height);

    ball.drawBall();
}