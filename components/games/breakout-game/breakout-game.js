window.onload = init();

function init() {

    // ========= Breakout Game =========
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');
    btnStartBreakoutGame.addEventListener('click', startBreakoutGame, false);
}




var canvas;
var context;
var interval = 0;


class KeyControls {
    constructor() {
        if (this instanceof KeyControls) {
            throw Error('A static class cannot be instantiated.');
        }
    }

    static rightPressed = false;
    static leftPressed = false;

    static keyDownHandler(evt) {
        /*
          If-Else, because only one of the two should be pressed at the same time!
          You cannot move to the right and left at the same time.
        */
        if (evt.key === 'Right' || evt.key === 'ArrowRight') {
            KeyControls.rightPressed = true;
        } else if (evt.key === 'Left' || evt.key === 'ArrowLeft') {
            KeyControls.leftPressed = true;
        }
    }

    static keyUpHandler(evt) {
        /*
          If-Else, because only one of the two should be pressed at the same time!
          You cannot move to the right and left at the same time.
        */
        if (evt.key === 'Right' || evt.key === 'ArrowRight') {
            KeyControls.rightPressed = false;
        } else if (evt.key === 'Left' || evt.key === 'ArrowLeft') {
            KeyControls.leftPressed = false;
        }
    }
}


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


    /*
      There is no way to implement abstract methods in JS. 
      Therefore workaround with throwing an error when not implemented in subclass.
    */
    draw() {
        throw Error('Method draw() must be implemented in subclass.');
    }
}

class Circle extends CanvasObject {
    constructor(x, y, radius) {
        super(x, y);
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}

class Rectangle extends CanvasObject {
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
}


class Ball extends Circle {
    constructor(x, y, radius) {
        super(x, y, radius);
        this._dX = 2;
        this._dY = -2;
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


    draw(paddle) {
        /*
          Best Practice: Save & restore context to restore state
          before e. g. transforming.
        */
        context.save();

        context.beginPath();
        context.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        context.fillStyle = '#FF0000';
        context.fill();
        context.closePath();

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
        else if (this._y + this._dY > canvas.height - this._radius - paddle.height) {
            // Ball hit paddle
            if (this._x + this._radius > paddle.x && this._x - this._radius < paddle.x + paddle.width) {
                this._dY = -this._dY;
            }
            // Ball didn't hit paddle but also didn't hit bottom yet
            else if (this._y + this._dY < canvas.height - this._radius) {
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
        if (this._x + this._dX < this._radius || this._x + this._dX > canvas.width - this._radius) {
            this._dX = -this._dX;
        }

        this._x += this._dX;
        this._y += this._dY;

        context.restore();
    }
}



class Paddle extends Rectangle {
    constructor(x, y, height, width) {
        super(x, y, height, width);
    }


    draw() {
        /*
          Best Practice: Save & restore context to restore state
          before e. g. transforming.
        */
        context.save();

        context.beginPath();


        /*
          Handle movement of paddle e. g. via keyboard.
          Paddle should only move within boundaries of canvas.
        */
        if (KeyControls.rightPressed) {
            this._x = Math.min(this._x + 7, canvas.width - this._width);
        } else if (KeyControls.leftPressed) {
            this._x = Math.max(this._x - 7, 0);
        }



        context.rect(this._x, this._y, this._width, this._height);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();

        context.restore();
    }
}


class Brick extends Rectangle {
    constructor(x, y, height, width) {
        super(x, y, height, width);
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }
}

class BrickGrid extends CanvasObject {
    constructor(x, y, rowCount, columnCount, brickWidth, brickHeight, brickPadding) {
        super(x, y);
        this._rowCount = rowCount;
        this._columnCount = columnCount;
        this._brickWidth = brickWidth;
        this._brickHeight = brickHeight;
        this._brickPadding = brickPadding;
    }

    draw() {
        for (let c = 0; c < this._columnCount; c++) {
            for (let r = 0; r < this._rowCount; r++) {
                const brickX = c * (this._brickWidth + this._brickPadding) + this._x;
                const brickY = r * (this._brickHeight + this._brickPadding) + this._y;

                const brick = new Brick(brickX, brickY, this._brickHeight, this._brickWidth);
                brick.draw();
            }
        }
    }
}






export function startBreakoutGame() {
    canvas = document.querySelector('#breakout-canvas');

    // It's possible that some pages do not have the Breakout-Game
    if (canvas) {
        const btnStartBreakoutGame = document.querySelector('#start-breakout-game');

        /* So that players cannot (accidentally) restart the game. */
        btnStartBreakoutGame.disabled = true;

        document.addEventListener('keydown', KeyControls.keyDownHandler, false);
        document.addEventListener('keyup', KeyControls.keyUpHandler, false);


        context = canvas.getContext('2d');

        const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 10, 75);
        const ball = new Ball(canvas.width / 2, canvas.height - 30, 10);
        const brickGrid = new BrickGrid(30, 30, 3, 5, 75, 20, 10);



        /*
          Create anonymous function so actual function isn't
          executed right away.
          Otherwise setInterval() doesn't work.

          // TODO: Use requestAPIFrame something like that for animation instead of interval
        */
        interval = setInterval(function () { drawBreakoutGame(paddle, ball, brickGrid); }, 10);
    }
}


function drawBreakoutGame(paddle, ball, brickGrid) {
    /*
      Improve in future: 
      Use array of balls to draw multiple balls at once
      if player wants a harder difficulty.
    */
    context.clearRect(0, 0, canvas.width, canvas.height);

    paddle.draw();
    ball.draw(paddle);
    brickGrid.draw();
}