import Cell from './cell';
import Canvas from 'views/canvas';

class Barrier extends Cell {

    constructor(x, y) {
        super(x ,y);
        this._free = false;
        this._bonus = null;
    }

    setBonus(bonus) {
        this._bonus = bonus;
    }

    getBonus() {
        return this._bonus;
    }

    destroy() {
        this._free = true;
    }

    render() {
        Canvas().ctx.fillStyle = 'grey';
        Canvas().ctx.fillRect(this._position.x * this._cellSize, this._position.y * this._cellSize, this._cellSize, this._cellSize);

    }
}

export default Barrier;