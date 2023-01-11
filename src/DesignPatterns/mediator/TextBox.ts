import { DialogBox } from './DialogBox';
import { UIControl } from './UIControl';

export class TextBox extends UIControl {
  private content: string = '';

  public constructor(owner: DialogBox) {
    super(owner);
  }

  public getContent() {
    return this.content;
  }

  public setContent(content: string) {
    this.content = content;
    this.owner.changed(this);
  }
}
