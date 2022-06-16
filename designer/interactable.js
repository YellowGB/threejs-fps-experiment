import { scene } from "../engine/scene";
import * as THREE from 'three';
import { setBoundingBox } from "../engine/collisions";

let interactableBBoxes = [];

export { interactableBBoxes };

/**
 * Définit et place les différentes interactions de la scène
 */
export function setInteractables() {

    const testInteraction = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10 ),
    );
    testInteraction.position.y = 5;
    interactableBBoxes.push( setBoundingBox( testInteraction, 'testFunction' ) );

    scene.add( testInteraction );
}

/**
 * Trouve une fonction correspondant à une interaction et l'exécute
 * @param {string} fnString 
 */
export function getInteraction( fnString ) { // la méthode utilisant window[nomDeLaFonction] ne semble pas fonctionner avec THREEJS
    switch ( fnString ) {
        case 'testFunction': testFunction(); break;
    }
}

//----- FONCTIONS d'INTERACTION -----\\
function testFunction() {
    console.log('ça marche !!!');
}