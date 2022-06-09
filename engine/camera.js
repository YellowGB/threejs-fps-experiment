import { PerspectiveCamera } from "three";
import { consts } from "./consts";

const camera    = new PerspectiveCamera( 45, consts.windowWidth / consts.windowHeight, 1, 500 );

camera.position.set( 0, 0, 100 )
camera.lookAt( 0, 0, 0 );

export { camera };