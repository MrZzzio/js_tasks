import Body from './body';

class Mob extends Body {

    constructor(health, x, y){
        super(false, health, x, y);
        this._color = 'blue';
    }

    attack() {

    }
}

export default Mob;