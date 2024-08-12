import * as keyControls from '/components/games/key-controls.js';
import * as canvasObjects from '/components/games/canvas-basic-objects.js';


window.onload = init();

function init() {

    // ========= Breakout Game =========
    const btnStartBreakoutGame = document.querySelector('#start-breakout-game');
    btnStartBreakoutGame.addEventListener('click', startBreakoutGame, false);
}




var canvas;
var context;
var interval = 0;



class Ball extends canvasObjects.Circle {
    constructor(x, y, radius) {
        super(x, y, radius);
        this.dX = 2;
        this.dY = -2;
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
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
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
        if (this.y + this.dY < this.radius) {
            this.dY = -this.dY;
        }
        // Collision Detection: Y-Coordinate (Bottom)
        else if (this.y + this.dY > canvas.height - this.radius - paddle.height) {
            // Ball hit paddle
            if (this.x + this.radius > paddle.x && this.x - this.radius < paddle.x + paddle.width) {
                this.dY = -this.dY;
            }
            // Ball didn't hit paddle but also didn't hit bottom yet
            else if (this.y + this.dY < canvas.height - this.radius) {
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
        if (this.x + this.dX < this.radius || this.x + this.dX > canvas.width - this.radius) {
            this.dX = -this.dX;
        }

        this.x += this.dX;
        this.y += this.dY;

        context.restore();
    }
}



class Paddle extends canvasObjects.Rectangle {
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
        if (keyControls.rightPressed) {
            this.x = Math.min(this.x + 7, canvas.width - this.width);
        } else if (keyControls.leftPressed) {
            this.x = Math.max(this.x - 7, 0);
        }



        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = '#0095DD';
        context.fill();
        context.closePath();

        context.restore();
    }
}


class Brick extends canvasObjects.Rectangle {
    /*
      Status of Brick:
      0 = Hidden
      1 = Visible
    
      Further statuses can be added in the future, 
      such as "2 = Indestructible" to make it even
      harder for the user.
    */
    #possibleStatus = {
        0: "Hidden",
        1: "Visible"
    };

    constructor(x, y, height, width, status) {
        super(x, y, height, width, status);
        this.status = status;
    }

    get status() {
        return this._status;
    }
    set status(status) {
        if (status in this.#possibleStatus) {
            this._status = status;
        } else {
            throw Error('Imported status value is not intended.');
        }
    }

    draw() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = "#0095DD";
        context.fill();
        context.closePath();
    }
}

class BrickGrid extends canvasObjects.CanvasObject {
    constructor(x, y, rowCount, columnCount, brickWidth, brickHeight, brickPadding) {
        super(x, y);
        this.rowCount = rowCount;
        this.columnCount = columnCount;
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.brickPadding = brickPadding;
        this.bricks = this.#initBricks();
    }

    #initBricks() {
        const bricks = []

        for (let c = 0; c < this.columnCount; c++) {
            bricks[c] = [];

            for (let r = 0; r < this.rowCount; r++) {
                const brickX = c * (this.brickWidth + this.brickPadding) + this.x;
                const brickY = r * (this.brickHeight + this.brickPadding) + this.y;
                const brick = new Brick(brickX, brickY, this.brickHeight, this.brickWidth, 1);

                bricks[c][r] = brick;
            }
        }

        return bricks;
    }

    draw() {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                const brick = this.bricks[c][r]

                if (brick.status === 1) {
                    brick.draw();
                } else {
                    // TODO: Implement hidden status
                }

            }
        }
    }
}





export function startBreakoutGame() {
    canvas = document.querySelector('#breakout-canvas');

    // It's possible that some pages do not have the Breakout-Game
    if (canvas) {
        context = canvas.getContext('2d');
        const btnStartBreakoutGame = document.querySelector('#start-breakout-game');

        /* So that players cannot (accidentally) restart the game. */
        btnStartBreakoutGame.disabled = true;

        document.addEventListener('keydown', keyControls.keyDownHandler, false);
        document.addEventListener('keyup', keyControls.keyUpHandler, false);

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