import Cell from './cell';
import Canvas from 'views/canvas';

class Block extends Cell {

    constructor(x, y) {
        super(x, y);
        this._free = false;
    }

    render() {
        Canvas().ctx.fillStyle = 'red';
        Canvas().ctx.fillRect(this._position.x * this._cellSize, this._position.y * this._cellSize, this._cellSize, this._cellSize);

    }
}

export default Block;