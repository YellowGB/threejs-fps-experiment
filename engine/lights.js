import { AmbientLight } from "three";
import { PointLight } from "three";
import { scene } from "./scene";

const pointLight    = new PointLight( 0xff0000 );
const ambientLight  = new AmbientLight( 0x0000ff, 0.1 );

pointLight.position.set( 10, 10, 10 );

export { pointLight, ambientLight };