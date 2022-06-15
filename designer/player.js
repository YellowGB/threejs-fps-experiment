import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { setBoundingBox } from '../engine/collisions';

const playerWidth   = 15;
const playerHeight  = 25;
const playerDepth   = 15;
const interactDist = 30;

const player = new Mesh(
    new BoxGeometry( playerWidth, playerHeight, playerDepth ),
    // pas besoin de material puisqu'on ne la voit jamais
);
player.position.y = playerHeight / 2;
let playerBB = setBoundingBox( player );

const interactBox = new Mesh(
    new BoxGeometry( playerWidth + interactDist, playerHeight, playerDepth + interactDist ),
);
interactBox.position.y = playerHeight / 2;
let interactBB = setBoundingBox( interactBox );

export { player, playerBB, interactBox, interactBB };