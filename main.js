import './style.css'
import * as THREE from 'three';
import { scene } from './engine/scene';
import { textures } from './engine/textures';
import { pointLight, ambientLight } from './engine/lights';
import { controls } from './engine/controls';
import { helpers } from './engine/helpers';
import { animate } from './engine/render-loop';

// Background
scene.background = textures.space;

// Lights
scene.add( pointLight, ambientLight );

// Helpers
scene.add( helpers.axes );
