import Body from './body';

class Mob extends Body {

    constructor(health, x, y){
        super();
        this._isPlayer = false;
        this._health = health;
        this._position = {
            x,
            y
        };
        this._color = 'blue';
    }

    attack() {

    }
}

export default Mob;