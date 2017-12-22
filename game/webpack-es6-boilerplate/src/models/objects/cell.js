import Canvas from 'views/canvas';

const cellSize = 64;

class Cell {

    constructor(x, y) {
        this._position = {
            x,
            y
        };
        this._free = true;
    }

    getPosition() {
        return this._position;
    }

    setPosition(value) {
        this._position = value;
    }

    static getCanvasCoord(x, y) {
        return {
            x: (x * cellSize + cellSize / 2),
            y: (y * cellSize + cellSize / 2)
        }
    }

    canMove() {
        return this._free;
    }

    render() {
        Canvas().ctx.beginPath();
        Canvas().ctx.strokeStyle = 'black';
        Canvas().ctx.lineWidth = 1;
        Canvas().ctx.rect(this._position.x * cellSize, this._position.y * cellSize, cellSize, cellSize);
        Canvas().ctx.stroke();
    }
}

export default Cell;