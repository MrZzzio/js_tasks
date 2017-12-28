import Cell from './cell';
import Canvas from 'views/canvas';
import field from './field';
import Fabric from '../fabric';

class Bomb extends Cell {

    constructor(x ,y) {
        super(x, y);
        this._radius = 1;
        this._free = false;
        this._power = 1;
        this._canDestroy = true;
    }

    getRadius() {
        return this._radius;
    }

    render() {
        const coord = field.getCell(this._position.x, this._position.y).getCanvasCoord(this.getPosition().x, this.getPosition().y);
        Canvas().ctx.beginPath();
        Canvas().ctx.arc(coord.x, coord.y, 15, 0, 2 * Math.PI);
        Canvas().ctx.fillStyle = 'black';
        Canvas().ctx.fill();
        Canvas().ctx.stroke();
    }

    explosion() {
        console.log('BOOM!!!');
        let cells = this.getCellsToDestroy();
        for (let i = 0; i < cells.length; i++) {
            const x = cells[i].getPosition().x;
            const y = cells[i].getPosition().y;
            field.setCell(x, y, new Cell(x, y));
        }
        Fabric().updateObjects(field.getCells());
        Canvas().clear();
        Canvas().render(Fabric().getAllObjects());
    }

    getCellsToDestroy() {
        let cells = [];
        for (let i = this.getPosition().x - this.getRadius(); i <= this.getPosition().x + this.getRadius(); i++) {
            let cell1 = field.getCell(i, this.getPosition().y);
            if (cell1 && cell1.canDestroy()) {
                cells.push(cell1);
            }
        }
        for (let i = this.getPosition().y - this.getRadius(); i <= this.getPosition().y + this.getRadius(); i++) {
            let cell2 = field.getCell(this.getPosition().x, i);
            if (/*this.getPosition().y !== i ||*/ cell2 && cell2.canDestroy()) {
                cells.push(cell2);
            }
        }
        return cells;
    }
}

export default Bomb;