import { scene } from "./scene";
import { camera } from "./camera";
import { renderer} from "./renderer";
import { controls, moves, debug } from "./controls";
import { helpers, boundingBoxHelper } from "./helpers";
import { consts } from "./consts";
import { skybox } from "../designer/skybox";
import { player, playerBB, interactBox, interactBB } from '../designer/player';
import { boundingBoxes } from '../designer/environment';
import { interactableBBoxes, getInteraction } from '../designer/interactable';

let speed               = 2;
const playerHelper      = boundingBoxHelper( playerBB, false );
const interactHelper   = boundingBoxHelper( interactBB, false, 0x12ffcc );

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
    player.position.x = interactBox.position.x = camera.position.x;
    player.position.z = interactBox.position.z = camera.position.z;
    playerBB.copy( player.geometry.boundingBox ).applyMatrix4( player.matrixWorld );
    interactBB.copy( interactBox.geometry.boundingBox ).applyMatrix4( interactBox.matrixWorld );

    // Collisions
    boundingBoxes.forEach( (bb) => {
        if ( playerBB.intersectsBox( bb ) ) {
            if ( moves.up )     controls.moveForward( -speed );
            if ( moves.down )   controls.moveForward( speed );
            if ( moves.right )  controls.moveRight( -speed );
            if ( moves.left )   controls.moveRight( speed );
        }
    });

    // interactions
    interactableBBoxes.forEach( (bb) => {
        if ( interactBB.intersectsBox( bb ) ) {
            document.querySelector( '#interact-prompt' ).classList.remove( 'hidden' );
            window.onclick = () => { getInteraction( bb.action ); }
        }
        else {
            document.querySelector( '#interact-prompt' ).classList.add( 'hidden' );
            window.onclick = false;
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
        scene.add( helpers.axes, playerHelper, interactHelper );
    }
    else {
        consts.debugInfo.innerHTML = '';
        scene.remove( helpers.axes, playerHelper, interactHelper );
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

function testFunction() {
    console.log('reetsets');
}