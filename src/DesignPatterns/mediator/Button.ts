import { UIControl } from './UIControl';

export class Button extends UIControl {
  private enabled: boolean = false;

  public isEnabled() {
    return this.enabled;
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    this.notifyEventHandlers();
  }
}
