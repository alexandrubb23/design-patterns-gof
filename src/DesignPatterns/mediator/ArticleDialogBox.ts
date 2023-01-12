import { Button } from './Button';
import { ListBox } from './ListBox';
import { TextBox } from './TextBox';

export class ArticleDialogBox {
  private articlesListBox: ListBox = new ListBox();
  private titleTextBox: TextBox = new TextBox();
  private saveButton: Button = new Button();

  public constructor() {
    this.articlesListBox.addEventHandler(this.articlesSelected.bind(this));
    this.titleTextBox.addEventHandler(this.titleChanged.bind(this));
  }

  public simulateUserInteraction() {
    this.articlesListBox.setSelection('Article 1');

    console.log('TextBox: ' + this.titleTextBox.getContent());
    console.log('Button: ' + this.saveButton.isEnabled());
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
