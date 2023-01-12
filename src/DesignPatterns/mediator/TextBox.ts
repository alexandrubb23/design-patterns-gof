import { UIControl } from './UIControl';

export class TextBox extends UIControl {
  private content: string = '';

  public getContent() {
    return this.content;
  }

  public setContent(content: string) {
    this.content = content;
    this.notifyEventHandlers();
  }
}
