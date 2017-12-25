import './index.scss';
import 'models/objects/field';
import 'models/objects/cell';
import 'models/persons/body';
import {a} from './hello';
// import _ from 'lodash';
import Canvas from 'views/canvas';
import Field from './models/objects/field';
import Cell from './models/objects/cell';
import Player from './models/persons/player';
import Mob from './models/persons/mob';
import Keyboard from './controlls/keyboard';
import Fabric from './models/fabric';

// document.getElementById('root').innerHTML = a();

const fabric = Fabric();
fabric.createObjects();

console.log(Fabric().getAllObjects());

Canvas().render(Fabric().getAllObjects());

document.addEventListener('keydown', Keyboard, false);

