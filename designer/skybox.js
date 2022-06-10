import { Mesh, MeshBasicMaterial, BoxGeometry, BackSide } from "three";
import { textureLoader } from '../engine/texture-loader';

const skyboxSize  = 10000;
const skyboxImage = 'DaylightBox';

const skybox = new Mesh(
    new BoxGeometry( skyboxSize, skyboxSize, skyboxSize ),
    createMaterialArray( skyboxImage )
);

function createMaterialArray( filename ) {
    const imagePaths    = createPathStrings( filename );
    const materialArray = imagePaths.map( image => {
        let texture = textureLoader.load( image );
        return new MeshBasicMaterial({
            map: texture,
            side: BackSide
        });
    });

    return materialArray;
}

function createPathStrings( filename ) {
    const basePath      = '../assets/skybox/';
    const baseFilename  = basePath + filename;
    const fileType      = '.bmp';
    const sides         = ['east', 'west', 'up', 'down', 'north', 'south'];
    const pathStrings   = sides.map( side => {
        return baseFilename + '_' + side + fileType;
    });

    return pathStrings;
}

export { skybox };