import { scene } from '../engine/scene';
import { pointLight, ambientLight } from '../engine/lights';
import { setEnvironment } from './environment';
import { skybox } from './skybox';

export function designer() {
    
    scene.add( skybox, pointLight, ambientLight );

    setEnvironment();
}