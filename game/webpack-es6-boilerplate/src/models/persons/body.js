import field from '../objects/field';
import Canvas from '../../views/canvas';
import Cell from '../objects/cell';

class Body {

    constructor(isPlayer, health, x, y) {
        this._isPlayer = isPlayer;
        this._health = health;
        this._position = {
            x,
            y
        };
        this._color = 'green';
    }

    isPlayer() {
        return this._isPlayer;
    }

    setPlayer(value) {
        this._isPlayer = value;
    }

    getHealth() {
        return this._health;
    }

    setHealth(value) {
        this._health = value;
    }


    getPosition() {
        return this._position;
    }

    setPosition(value) {
        this._position = value;
    }

    move(direction) {
        let cell;
        let oldCell = field.getCell(this._position.x, this._position.y);
        switch (direction) {
            case 'left':
                cell = field.getCell(this._position.x - 1, this._position.y);
                if (cell && cell.canMove()) {
                    this._position.x -= 1;
                }
                break;
            case 'right':
                cell = field.getCell(this._position.x + 1, this._position.y);
                if (cell && cell.canMove()) {
                    this._position.x += 1;
                }
                break;
            case 'up':
                cell = field.getCell(this._position.x, this._position.y - 1);
                if (cell && cell.canMove()) {
                    this._position.y -= 1;
                }
                break;
            case 'down':
                cell = field.getCell(this._position.x, this._position.y + 1);
                if (cell && cell.canMove()) {
                    this._position.y += 1;
                }
                break;
        }
        if (oldCell.constructor.name !== "Bomb") {
            oldCell.setObject(null);
            oldCell.setFree(true);
        }
        cell.setObject(this);
        cell.setFree(false);
    }

    render() {
        const coord = field.getCell(this._position.x, this._position.y).getCanvasCoord(this.getPosition().x, this.getPosition().y);
        Canvas().ctx.beginPath();
        Canvas().ctx.arc(coord.x, coord.y, 20, 0, 2 * Math.PI);
        Canvas().ctx.fillStyle = this._color;
        Canvas().ctx.fill();
        Canvas().ctx.stroke();
    }
}

export default Body;
