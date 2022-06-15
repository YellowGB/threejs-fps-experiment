import { scene } from '../engine/scene';
import { pointLight, ambientLight } from '../engine/lights';
import { setEnvironment } from './environment';
import { skybox } from './skybox';
import { player, interactBox } from './player';
import { setInteractables } from './interactable';

export function designer() {
    
    scene.add( skybox, pointLight, ambientLight );

    setEnvironment();
    setInteractables();

    scene.add( player, interactBox );
}