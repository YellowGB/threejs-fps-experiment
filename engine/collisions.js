import { Box3, Vector3 } from "three";

/**
 * Attache une Bounding Box à un objet THREEJS
 * @param {Mesh} object L'objet de type Mesh
 * @param {(string|false)} action Indique une action qui peut être exécutée lors d'une intersection avec cette BB (optionnel)
 * @returns {Box3} boundingBox
 */
export function setBoundingBox( object, action = false ) {
    let boundingBox = new Box3( new Vector3(), new Vector3() );
    boundingBox.setFromObject( object );

    boundingBox.action = action;

    return boundingBox;
}