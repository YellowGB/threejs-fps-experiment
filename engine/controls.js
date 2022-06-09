import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { camera } from './camera';
import { renderer } from './renderer';

const controls = new PointerLockControls( camera, renderer.domElement );

// Keys listeners
renderer.domElement.setAttribute( 'tabindex', 0 ); // Nécessaire pour qu'un canvas puisse recevoir un focus du clavier, sinon les évènements de clavier ne seront jamais écoutés

let moves = [];
let debug = true; // mode debug pour afficher des informations utiles dans le render-loop

renderer.domElement.addEventListener( 'keydown', (e) => {
    if ( e.code === 'KeyW' || e.code === 'ArrowUp' )    moves.up    = true;
    if ( e.code === 'KeyS' || e.code === 'ArrowDown' )  moves.down  = true;
    if ( e.code === 'KeyD' || e.code === 'ArrowRight' ) moves.right = true;
    if ( e.code === 'KeyA' || e.code === 'ArrowLeft' )  moves.left  = true;
    if ( e.code === 'Backslash' ) debug = ! debug;
});

renderer.domElement.addEventListener( 'keyup', (e) => {
    if ( e.code === 'KeyW' || e.code === 'ArrowUp' )    moves.up    = false;
    if ( e.code === 'KeyS' || e.code === 'ArrowDown' )  moves.down  = false;
    if ( e.code === 'KeyD' || e.code === 'ArrowRight' ) moves.right = false;
    if ( e.code === 'KeyA' || e.code === 'ArrowLeft' )  moves.left  = false;
});

export { controls, moves, debug };