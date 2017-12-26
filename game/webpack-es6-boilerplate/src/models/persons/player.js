import Body from './body';
import Canvas from '../../views/canvas';
import Cell from '../objects/cell';
import Fabric from '../../models/fabric';

class Player extends Body {

    constructor(health, x, y) {
        super(true, health, x, y);
        this._color = 'red';
    }

    bomb() {
        Fabric().createBomb(this.getPosition().x, this.getPosition().y);
    }

    takeBonus() {

    }


}

export default Player;