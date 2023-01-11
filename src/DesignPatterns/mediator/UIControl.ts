import { DialogBox } from './DialogBox';

export class UIControl {
  protected owner: DialogBox;

  public constructor(owner: DialogBox) {
    this.owner = owner;
  }
}
