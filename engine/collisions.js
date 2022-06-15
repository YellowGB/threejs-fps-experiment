import { Box3, Vector3 } from "three";

export function setBoundingBox( object, action = false ) {
    let boundingBox = new Box3( new Vector3(), new Vector3() );
    boundingBox.setFromObject( object );

    boundingBox.action = action;

    return boundingBox;
}