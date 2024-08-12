window.onload = init();

function init() {

    // ========= Breakout Game =========
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');
    btnStartBreakoutGame.addEventListener('click', startBreakoutGame, false);
}




var breakoutCanvas;
var breakoutCtx;
var rightPressed = false;
var leftPressed = false;


class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.dX = 2;
        this.dY = -2;
        this.radius = radius;
    }

    draw() {
        /*
          Best Practice: Save & restore context to restore state
          before e. g. transforming.
        */
        breakoutCtx.save();

        breakoutCtx.beginPath();
        breakoutCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
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
        if (this.y + this.dY < this.radius || this.y + this.dY > breakoutCanvas.height - this.radius) {
            this.dY = -this.dY;
        }

        // Collision Detection: X-Coordinate (Left & Right)
        if (this.x + this.dX < this.radius || this.x + this.dX > breakoutCanvas.width - this.radius) {
            this.dX = -this.dX;
        }

        this.x += this.dX;
        this.y += this.dY;

        breakoutCtx.restore();
    }
}



class Paddle {
    constructor(x, y, height, width) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
    }

    draw() {
        /*
          Best Practice: Save & restore context to restore state
          before e. g. transforming.
        */
        breakoutCtx.save();

        breakoutCtx.beginPath();


        /*
          Handle movement of paddle e. g. via keyboard.
          Paddle should only move within boundaries of canvas.
        */
        if (rightPressed) {
            this.x = Math.min(this.x + 7, breakoutCanvas.width - this.width);
        } else if (leftPressed) {
            this.x = Math.max(this.x - 7, 0);
        }



        breakoutCtx.rect(this.x, this.y, this.width, this.height);
        breakoutCtx.fillStyle = '#0095DD';
        breakoutCtx.fill();
        breakoutCtx.closePath();

        breakoutCtx.restore();
    }
}



export function startBreakoutGame() {
    breakoutCanvas = document.querySelector('#breakout-canvas');

    // It's possible that some pages do not have the Breakout-Game
    if (breakoutCanvas) {
        const btnStartBreakoutGame = document.querySelector('#start-breakout-game');

        /* So that players cannot (accidentally) restart the game. */
        btnStartBreakoutGame.disabled = true;

        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);


        breakoutCtx = breakoutCanvas.getContext('2d');

        const paddle = new Paddle((breakoutCanvas.width - 75) / 2, breakoutCanvas.height - 10, 10, 75);
        const ball = new Ball(breakoutCanvas.width / 2, breakoutCanvas.height - 30, 10);


        /*
          Create anonymous function so actual function isn't
          executed right away.
          Otherwise setInterval() doesn't work.

          // TODO: Use requestAPIFrame something like that for animation instead of interval
        */
        setInterval(function () { drawBreakoutGame(paddle, ball); }, 10);
    }
}


function drawBreakoutGame(paddle, ball) {
    /*
      Improve in future: 
      Use array of balls to draw multiple balls at once
      if player wants a harder difficulty.
    */
    breakoutCtx.clearRect(0, 0, breakoutCanvas.width, breakoutCanvas.height);

    paddle.draw();
    ball.draw();
}


function keyDownHandler(evt) {
    /*
      If-Else, because only one of the two should be pressed at the same time!
      You cannot move to the right and left at the same time.
    */
    if (evt.key === 'Right' || evt.key === 'ArrowRight') {
        rightPressed = true;
    } else if (evt.key === 'Left' || evt.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

function keyUpHandler(evt) {
    /*
      If-Else, because only one of the two should be pressed at the same time!
      You cannot move to the right and left at the same time.
    */
    if (evt.key === 'Right' || evt.key === 'ArrowRight') {
        rightPressed = false;
    } else if (evt.key === 'Left' || evt.key === 'ArrowLeft') {
        leftPressed = false;
    }
}