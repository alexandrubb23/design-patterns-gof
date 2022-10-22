import { EditorState } from './EditorState';

export class Editor {
  private content: string = '';

  public createState() {
    return new EditorState(this.content);
  }

  public restore(state: EditorState): void {
    this.content = state.getContent();
  }

  public getContent() {
    return this.content;
  }

  public setContent(content: string) {
    this.content = content;
  }
}
