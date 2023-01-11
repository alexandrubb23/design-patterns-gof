import { UIControl } from './UIControl';

export abstract class DialogBox {
  public abstract changed(control: UIControl): void;
}
