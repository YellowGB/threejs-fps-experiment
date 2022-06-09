import { consts } from "./consts";
import { WebGLRenderer } from "three";

const renderer  = new WebGLRenderer( { canvas: consts.appCanvas } );

renderer.setPixelRatio( consts.pixelRatio );
renderer.setSize( consts.windowWidth, consts.windowHeight );

export { renderer };