import './style.css'

//----- ENGINE ----\\
import { animate } from './engine/render-loop';

//---- DESIGNER ----\\
import { designer } from './designer/designer';

designer();
animate();