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
var interval = 0;

class CanvasObject {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }

    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
}


class Ball extends CanvasObject {
    constructor(x, y, radius) {
        super(x, y);
        this._dX = 2;
        this._dY = -2;
        this._radius = radius;
    }

    get dX() {
        return this._dX;
    }
    set dX(dX) {
        this._dX = dX;
    }

    get dY() {
        return this._dY;
    }
    set dY(dY) {
        this._dY = dY;
    }

    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }


    draw(paddle) {
        /*
          Best Practice: Save & restore context to restore state
          before e. g. transforming.
        */
        breakoutCtx.save();

        breakoutCtx.beginPath();
        breakoutCtx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        breakoutCtx.fillStyle = '#FF0000';
        breakoutCtx.fill();
        breakoutCtx.closePath();

        /*
          Important:
          With collision detection, the outer point of an object must always 
          be taken into account and *not* the center! 
          This means that the radius must be taken into account for a ball or circle.
        */



        // Collision Detection: Y-Coordinate (Top)
        if (this._y + this._dY < this._radius) {
            this._dY = -this._dY;
        }
        // Collision Detection: Y-Coordinate (Bottom)
        else if (this._y + this._dY > breakoutCanvas.height - this._radius - paddle.height) {
            // Ball hit paddle
            if (this._x + this._radius > paddle.x && this._x - this._radius < paddle.x + paddle.width) {
                this._dY = -this._dY;
            }
            // Ball didn't hit paddle but also didn't hit bottom yet
            else if (this._y + this._dY < breakoutCanvas.height - this._radius) {
                // Do nothing. Wait for next for frame until it's clear that bottom has been hit.
            }
            // Ball hit bottom
            else {
                alert('Game Over!');
                document.location.reload();
                clearInterval(interval);
            }
        }


        // Collision Detection: X-Coordinate (Left & Right)
        if (this._x + this._dX < this._radius || this._x + this._dX > breakoutCanvas.width - this._radius) {
            this._dX = -this._dX;
        }

        this._x += this._dX;
        this._y += this._dY;

        breakoutCtx.restore();
    }
}



class Paddle extends CanvasObject {
    constructor(x, y, height, width) {
        super(x, y);
        this._height = height;
        this._width = width;
    }

    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }

    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
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
            this._x = Math.min(this._x + 7, breakoutCanvas.width - this._width);
        } else if (leftPressed) {
            this._x = Math.max(this._x - 7, 0);
        }



        breakoutCtx.rect(this._x, this._y, this._width, this._height);
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
        interval = setInterval(function () { drawBreakoutGame(paddle, ball); }, 10);
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
    ball.draw(paddle);
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