import Field from './objects/field';
import Cell from './objects/cell';
import Mob from './persons/mob';
import Player from './persons/player';

export default function fabric() {

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            Field.setCell(i, j, new Cell(i, j));
        }
    }

    const player = new Player(100, 0, 0);
    const mob = new Mob(100, 10, 10);

    return {
        player: player,
        mob: mob
    }
}