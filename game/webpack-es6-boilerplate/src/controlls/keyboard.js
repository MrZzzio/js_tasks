import Fabric from '../models/fabric';
import Canvas from '../views/canvas';

export default function action(event) {
    console.log(Fabric().player);
    console.log(event);
    Canvas().clear();
}