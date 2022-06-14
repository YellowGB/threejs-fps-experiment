import { scene } from "./scene";
import { camera } from "./camera";
import { renderer} from "./renderer";
import { controls, moves, debug } from "./controls";
import { helpers, boundingBoxHelper } from "./helpers";
import { consts } from "./consts";
import { skybox } from "../designer/skybox";
import { player, playerBB } from '../designer/player';
import { boundingBoxes } from '../designer/environment';

let speed = 2;
const playerHelper = boundingBoxHelper( playerBB, false );

export function animate() {

    // Limiter l'affichage à 30fps
    setTimeout( function() {
        requestAnimationFrame( animate );
    }, 1000 / 30 );

    // Lock la souris pour la navigation FPS
    if ( document.hasFocus() ) controls.lock();

    // Controls
    if ( moves.up )     controls.moveForward( speed );
    if ( moves.down )   controls.moveForward( -speed );
    if ( moves.right )  controls.moveRight( speed );
    if ( moves.left )   controls.moveRight( -speed );

    // Update player position and bounding box
    player.position.x = camera.position.x;
    player.position.z = camera.position.z;
    playerBB.copy( player.geometry.boundingBox ).applyMatrix4( player.matrixWorld );

    // Collisions
    boundingBoxes.forEach( (bb) => {
        if ( playerBB.intersectsBox( bb ) ) {
            if ( moves.up )     controls.moveForward( -speed );
            if ( moves.down )   controls.moveForward( speed );
            if ( moves.right )  controls.moveRight( -speed );
            if ( moves.left )   controls.moveRight( speed );
        }
    });

    // Camera coordinates
    if ( debug ) {
        consts.debugInfo.innerHTML = `
            <li>Speed : ${ speed }</li>
            <li>CameraX : ${ camera.position.x }</li>
            <li>CameraY : ${ camera.position.y }</li>
            <li>CameraZ : ${ camera.position.z }</li>
        `;
        scene.add( helpers.axes, playerHelper );
    }
    else {
        consts.debugInfo.innerHTML = '';
        scene.remove( helpers.axes, playerHelper );
    }

    // Rotation lente de la skybox pour donner un peu de vie aux nuages
    skybox.rotation.y += 0.00025;

    // Render
    renderer.render( scene, camera );
}

// Recalculer la taille du canva lorsque l'on change la taille de la fenêtre
window.addEventListener( 'resize', onWindowsResize, false );

function onWindowsResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}