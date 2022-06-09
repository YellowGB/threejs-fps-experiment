import { textureLoader } from "./texture-loader";

let textures = {};

const spaceTexture  = textureLoader.load('../assets/deepspace.webp');

textures.space = spaceTexture;

export { textures };