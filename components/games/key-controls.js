export class KeyControls {
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