import { Tool } from './Tool';

export class BrushTool implements Tool {
  public mouseDown(): string {
    return 'Brush icon';
  }

  public mouseUp(): string {
    return 'Draw a line';
  }
}
