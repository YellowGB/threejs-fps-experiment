import { PerspectiveCamera } from "three";
import { consts } from "./consts";

const fov    = 45;
const aspect = consts.windowWidth / consts.windowHeight;
const near   = 1;
const far    = 10000;

const camera = new PerspectiveCamera( fov, aspect, near, far );

camera.position.set( 0, 20, 90 )
camera.lookAt( 0, 0, 0 );

export { camera };