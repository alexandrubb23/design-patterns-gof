import { Editor, EditorState, History } from '../../src/DesignPatterns/memento';

describe('Editor Memento Pattern /', () => {
  let editor: Editor;
  let history: History<EditorState>;

  beforeEach(() => {
    editor = new Editor();
    history = new History<EditorState>();
  });

  const createContent = () => {
    ['a', 'b', 'c'].forEach(content => {
      editor.setContent(content);
      history.push(editor.createState());
    });
  };

  describe('if we are adding a, b, c and we undo once', () => {
    it('should return b', () => {
      createContent();

      editor.restore(history.pop());

      expect(editor.getContent()).toBe('b');
    });
  });

  describe('if we are adding a, b, c and we undo twice', () => {
    it('should return a', () => {
      createContent();

      editor.restore(history.pop());
      editor.restore(history.pop());

      expect(editor.getContent()).toBe('a');
    });
  });

  describe('if we are adding a, b, c and we are getting out of bounds when we undo', () => {
    it('should thrown an IndexOutOfBoundsException', () => {
      createContent();

      expect(() => {
        editor.restore(history.pop());
        editor.restore(history.pop());
        editor.restore(history.pop());
      }).toThrowError('Index -1 is out of bounds');
    });
  });
});
