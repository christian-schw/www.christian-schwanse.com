export class CanvasObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

export class Circle extends CanvasObject {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius;
    }
}

export class Rectangle extends CanvasObject {
    constructor(x, y, height, width) {
        super(x, y);
        this.height = height;
        this.width = width;
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