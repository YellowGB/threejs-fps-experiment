import './style.css'

//----- ENGINE ----\\
import { controls } from './engine/controls';
import { animate } from './engine/render-loop';

//---- DESIGNER ----\\
import { designer } from './designer/designer';

designer();
animate();