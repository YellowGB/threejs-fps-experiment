import { scene } from "./scene";
import { camera } from "./camera";
import { renderer} from "./renderer";
import { controls, moves, debug } from './controls';
import { consts } from './consts';

//---- RENDER ----\\
animate();

function animate() {

    // Limiter l'affichage à 30fps
    setTimeout( function() {
        requestAnimationFrame( animate );
    }, 1000 / 30 );

    // Controls
    if ( document.hasFocus() ) controls.lock(); // Lock la souris pour la navigation FPS

    if ( moves.up )     controls.moveForward(1);
    if ( moves.down )   controls.moveForward(-1);
    if ( moves.right )  controls.moveRight(1);
    if ( moves.left )   controls.moveRight(-1);

    // Camera coordinates
    if (debug) consts.debugInfo.innerHTML = `
        <li>CameraX : ${ camera.position.x }</li>
        <li>CameraY : ${ camera.position.y }</li>
        <li>CameraZ : ${ camera.position.z }</li>
    `;
    else consts.debugInfo.innerHTML = '';

    // Render
    renderer.render( scene, camera );
}

export { animate };