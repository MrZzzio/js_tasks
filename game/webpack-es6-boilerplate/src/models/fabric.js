import Field from './objects/field';
import Cell from './objects/cell';
import Block from './objects/block';
import Mob from './persons/mob';
import Player from './persons/player';
import Barrier from './objects/barrier';

const fieldSize = 11;
const objects = [];
const cells = [];
let player;
let mob1, mob2, mob3;

class Fabric {

    createObjects() {
        for (let i = 0; i < fieldSize; i++) {
            for (let j = 0; j < fieldSize; j++) {
                let object;
                if (i % 2 !== 0 && j % 2 !== 0) {
                    object = new Block(i, j);
                } else {
                    object = new Cell(i, j);
                    cells.push(object);
                }
                Field.setCell(i, j, object);
                objects.push(Field.getCell(i, j));
            }
        }
        Fabric.insertBarriers(cells);
        player = new Player(100, 0, 0);
        mob1 = new Mob(100, 10, 10);
        mob2 = new Mob(100, 0, 10);
        mob3 = new Mob(100, 10, 0);
        objects.push(player, mob1, mob2, mob3);
    }

    static insertBarriers(cells) {
        for (let i = 0; i < Math.round(cells.length * 0.3); i++) {
            let rnd = Math.floor(Math.random() * cells.length);
            while (Fabric.startPosition(cells[rnd].getPosition()) || !cells[rnd].canMove()) {
                rnd = Math.floor(Math.random() * cells.length);
            }
            const x = cells[rnd].getPosition().x;
            const y = cells[rnd].getPosition().y;
            const barrier = new Barrier(x, y);
            Field.setCell(x, y);
            objects.push(barrier);
        }
    }

    static startPosition(position) {
        return ((position.x === 0 && position.y === 0) ||
            (position.x === 0 && position.y === fieldSize - 1) ||
            (position.x === fieldSize - 1 && position.y === 0) ||
            (position.x === fieldSize - 1 && position.y === fieldSize - 1));
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