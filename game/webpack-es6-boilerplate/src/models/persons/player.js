import Body from './body';
import Canvas from '../../views/canvas';
import Cell from '../objects/cell';

class Player extends Body {

    constructor(health, x, y) {
        super();
        this._isPlayer = true;
        this._health = health;
        this._position = {
            x,
            y
        };
        this._color = 'red';
    }

    bomb() {
        console.log('BOOM!!!');
    }

    takeBonus() {

    }


}

export default Player;