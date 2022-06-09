import { camera } from './camera';
import { pointLight } from './lights';
import { AxesHelper, CameraHelper, PointLightHelper, GridHelper } from 'three';

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