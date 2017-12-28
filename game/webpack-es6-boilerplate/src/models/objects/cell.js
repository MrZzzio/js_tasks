import Canvas from 'views/canvas';

class Cell {

    constructor(x, y) {
        this._cellSize = 64;
        this._position = {
            x,
            y
        };
        this._free = true;
        this._canDestroy = false;
        this._object = null;
    }

    getPosition() {
        return this._position;
    }

    setPosition(value) {
        this._position = value;
    }

    getCanvasCoord(x, y) {
        return {
            x: (x * this._cellSize + this._cellSize / 2),
            y: (y * this._cellSize + this._cellSize / 2)
        }
    }

    canMove() {
        return this._free;
    }

    setFree(free) {
        this._free = free;
    }

    canDestroy() {
        return this._canDestroy;
    }

    getObject() {
        return this._object;
    }

    setObject(obj) {
        this._object = obj;
    }

    render() {
        Canvas().ctx.beginPath();
        Canvas().ctx.strokeStyle = 'black';
        Canvas().ctx.lineWidth = 1;
        Canvas().ctx.rect(this._position.x * this._cellSize, this._position.y * this._cellSize, this._cellSize, this._cellSize);
        Canvas().ctx.stroke();
    }
}

export default Cell;