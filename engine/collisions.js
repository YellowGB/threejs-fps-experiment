import { Box3, Vector3 } from "three";

export function setBoundingBox( object ) {
    let boundingBox = new Box3( new Vector3(), new Vector3() );
    boundingBox.setFromObject( object );

    return boundingBox;
}