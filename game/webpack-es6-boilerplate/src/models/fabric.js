import Field from './objects/field';
import Cell from './objects/cell';
import Mob from './persons/mob';
import Player from './persons/player';

const objects = [];
const cells = [];
let player;
let mob;

class Fabric {

    createObjects() {
        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 11; j++) {
                Field.setCell(i, j, new Cell(i, j));
                objects.push(Field.getCell(i, j));
            }
        }

        player = new Player(100, 0, 0);
        mob = new Mob(100, 10, 10);

        objects.push(player, mob);

    }

    getAllObjects() {
        return objects;
    }

    getCells() {
        return cells;
    }


    getPlayer() {
        return player;
    }

    getMob() {
        return mob;
    }
}

export default function fabric() {
    return new Fabric();
}