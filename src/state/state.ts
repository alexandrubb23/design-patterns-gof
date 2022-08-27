import { Canvas } from './Canvas';
import { SelectionTool } from './SelectionTool';

const canvas = new Canvas();
canvas.setCurrentTool(new SelectionTool());

console.log(canvas.mouseDown());
console.log(canvas.mouseUp());
