import { camera } from './camera';
import { pointLight } from './lights';
import { scene } from './scene';
import { AxesHelper, CameraHelper, PointLightHelper, GridHelper, Box3Helper } from 'three';

let helpers = {};

const axesHelper    = new AxesHelper( 5 );
const cameraHelper  = new CameraHelper( camera );
const lightHelper   = new PointLightHelper( pointLight );
const gridHelper 	= new GridHelper( 200, 50 );

helpers.axes    = axesHelper;
helpers.camera  = cameraHelper;
helpers.light   = lightHelper;
helpers.grid    = gridHelper;

export { helpers };

export function boundingBoxHelper( boundingBox, add = true, color = 0x00ff00 ) {
    const box3Helper = new Box3Helper( boundingBox, color );
    box3Helper.material.linewidth = 3;
    if ( ! add ) return box3Helper;
    scene.add( box3Helper );
}