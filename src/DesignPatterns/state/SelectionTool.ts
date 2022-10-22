import { Tool } from './Tool';

export class SelectionTool implements Tool {
  public mouseDown(): string {
    return 'Selection icon';
  }

  public mouseUp(): string {
    return 'Draw a dashed rectangle';
  }
}
