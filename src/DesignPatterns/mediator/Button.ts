import { DialogBox } from './DialogBox';
import { UIControl } from './UIControl';

export class Button extends UIControl {
  private enabled: boolean = false;

  public constructor(owner: DialogBox) {
    super(owner);
  }

  public isEnabled() {
    return this.enabled;
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    this.owner.changed(this);
  }
}
