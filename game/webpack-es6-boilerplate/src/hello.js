import Cell from './models/objects/cell';
import Field from './models/objects/field';
import Body from './models/persons/body';
import Canvas from './views/canvas';

export function a() {

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            Field.setCell(i, j, new Cell(i, j));
        }
    }
    console.log(Field);

    const body = new Body(true, 100, 2, 1);
    body.move('left');
    console.log(body);

    Canvas();

}

