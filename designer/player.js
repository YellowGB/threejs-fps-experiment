import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { setBoundingBox } from '../engine/collisions';

const playerWidth   = 15;
const playerHeight  = 25;
const playerDepth   = 15;

const player = new Mesh(
    new BoxGeometry( playerWidth, playerHeight, playerDepth ),
    new MeshBasicMaterial( { color: 0x0000ff } )
);
player.position.y = playerHeight / 2;
let playerBB = setBoundingBox( player );

export { player, playerBB };