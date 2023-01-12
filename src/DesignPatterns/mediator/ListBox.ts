import { UIControl } from './UIControl';

export class ListBox extends UIControl {
  private selection: string = '';

  public getSelection() {
    return this.selection;
  }

  public setSelection(selection: string) {
    this.selection = selection;
    this.notifyEventHandlers();
  }
}
