import { Tool } from './Tool';

export class EraserTool implements Tool {
  public mouseDown(): string {
    return 'Eraser icon';
  }

  public mouseUp(): string {
    return 'Erase something';
  }
}
