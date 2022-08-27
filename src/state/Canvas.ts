import { Tool } from './Tool';

export class Canvas {
  private currentTool!: Tool;

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
