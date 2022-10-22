import { log } from '../utils';
import { Canvas } from './Canvas';
import { SelectionTool } from './SelectionTool';

const canvas = new Canvas();
canvas.setCurrentTool(new SelectionTool());

log(canvas.mouseDown());
log(canvas.mouseUp());
