import Cell from './cell';
import Canvas from 'views/canvas';

const cellSize = 64;

class Block extends Cell {

    constructor(x, y) {
        super();
        this._position = {
            x,
            y
        };
        this._free = false;
    }

    render() {
        Canvas().ctx.fillStyle = 'red';
        Canvas().ctx.fillRect(this._position.x * cellSize, this._position.y * cellSize, cellSize, cellSize);

    }
}

export default Block;