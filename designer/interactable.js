import { scene } from "../engine/scene";
import * as THREE from 'three';
import { setBoundingBox } from "../engine/collisions";

let interactableBBoxes = [];

export { interactableBBoxes };

export function setInteractables() {

    const testInteraction = new THREE.Mesh(
        new THREE.BoxGeometry( 10, 10, 10 ),
    );
    testInteraction.position.y = 5;
    testInteraction.action = 'ooo';
    interactableBBoxes.push( setBoundingBox( testInteraction, 'testFunction' ) );

    scene.add( testInteraction );
}