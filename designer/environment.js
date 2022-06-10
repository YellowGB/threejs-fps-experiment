import { scene } from "../engine/scene";
import * as THREE from 'three';

export function setEnvironment() {

    const floor = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 55, 200 ),
        new THREE.MeshStandardMaterial( { color: 0xffffff } )
    );
    floor.rotateX( - Math.PI / 2 ); // Rotate pour le mettre à plat sur l'axe Z
    
    const frontWall = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 55, 50 ),
        new THREE.MeshStandardMaterial( { color: 0xffffff } )
    );
    frontWall.translateY( 25 );
    frontWall.translateZ( -100 );
    
    const backWall = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 55, 50 ),
        new THREE.MeshStandardMaterial( { color: 0xffffff } )
    );
    backWall.translateY( 25 );
    backWall.translateZ( 100 );
    backWall.rotateY( - Math.PI );
    
    const sideRight = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 200, 10 ),
        new THREE.MeshStandardMaterial( { color: 0xffffff } )
    );
    sideRight.translateY( 5 );
    sideRight.translateX( 27.5 );
    sideRight.rotateY( - Math.PI / 2 );
    
    const sideLeft = new THREE.Mesh(
        new THREE.PlaneBufferGeometry( 200, 10 ),
        new THREE.MeshStandardMaterial( { color: 0xffffff } )
    );
    sideLeft.translateY( 5 );
    sideLeft.translateX( -27.5 );
    sideLeft.rotateY( Math.PI / 2 );
    
    scene.add( floor, frontWall, backWall, sideRight, sideLeft );
}
