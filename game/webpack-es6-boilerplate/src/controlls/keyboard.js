import Fabric from '../models/fabric';
import Canvas from '../views/canvas';

export default function action(event) {
    // console.log(event);
    const player = Fabric().getPlayer();

    switch (event.keyCode) {
        case 37:
            player.move('left');
            break;
        case 38:
            player.move('up');
            break;
        case 39:
            player.move('right');
            break;
        case 40:
            player.move('down');
            break;
        case 32:
            player.bomb();
            break;
    }

    Canvas().clear();
    Canvas().render(Fabric().getAllObjects());
}