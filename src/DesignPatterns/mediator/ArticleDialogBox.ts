import { Button } from './Button';
import { DialogBox } from './DialogBox';
import { ListBox } from './ListBox';
import { TextBox } from './TextBox';
import { UIControl } from './UIControl';

export class ArticleDialogBox extends DialogBox {
  private articlesListBox: ListBox = new ListBox(this);
  private titleTextBox: TextBox = new TextBox(this);
  private saveButton: Button = new Button(this);

  public simulateUserInteraction() {
    this.articlesListBox.setSelection('Article 1');

    console.log('TextBox: ' + this.titleTextBox.getContent());
    console.log('Button: ' + this.saveButton.isEnabled());
  }

  public changed(control: UIControl) {
    if (control === this.articlesListBox) this.articlesSelected();
    else if (control === this.titleTextBox) this.titleChanged();
  }

  private titleChanged() {
    const content = this.titleTextBox.getContent();
    const isEmpty = content === null || content === '';

    this.saveButton.setEnabled(!isEmpty);
  }

  private articlesSelected() {
    this.titleTextBox.setContent(this.articlesListBox.getSelection());
    this.saveButton.setEnabled(true);
  }
}
