const appCanvas     = document.querySelector( '#app' );
const debugInfo     = document.querySelector( '#debug' );
const windowWidth   = window.innerWidth;
const windowHeight  = window.innerHeight;
const pixelRatio    = window.devicePixelRatio;

let consts = {};
consts.appCanvas    = appCanvas;
consts.debugInfo    = debugInfo;
consts.windowWidth  = windowWidth;
consts.windowHeight = windowHeight;
consts.pixelRatio   = pixelRatio;

export { consts };