import { appCanvas, windowWidth, windowHeight, pixelRatio } from "./consts";
import { WebGLRenderer } from "three";

const renderer  = new WebGLRenderer( { canvas: appCanvas } );

renderer.setPixelRatio( pixelRatio );
renderer.setSize( windowWidth, windowHeight );

export { renderer };