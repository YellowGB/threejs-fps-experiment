import './style.css'
import * as THREE from 'three';
import { scene } from './engine/scene';
import { textures } from './engine/textures';
import { pointLight, ambientLight } from './engine/lights';
import { controls } from './engine/controls';
import { helpers } from './engine/helpers';
import { animate } from './engine/render-loop';

const torus = new THREE.Mesh(
    new THREE.TorusGeometry( 30, 3, 16, 100 ),
    new THREE.MeshStandardMaterial( { color: 0xffffff } )
);
scene.add(torus);

// Background
scene.background = textures.space;

// Lights
scene.add( pointLight, ambientLight );

// Helpers
scene.add( helpers.axes );
