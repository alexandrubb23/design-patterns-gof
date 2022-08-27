import { Tool } from './Tool';
import { SelectionTool } from './SelectionTool';

export class Canvas {
  private currentTool: Tool = new SelectionTool();

  public mouseDown(): string {
    return this.currentTool.mouseDown();
  }

  public mouseUp(): string {
    return this.currentTool.mouseUp();
  }

  public setCurrentTool(currentTool: Tool) {
    this.currentTool = currentTool;
  }
}
