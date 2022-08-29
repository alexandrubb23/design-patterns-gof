import { Editor } from './Editor';
import { EditorState } from './EditorState';
import { History } from './History';

const editor = new Editor();
const history = new History<EditorState>();

editor.setContent('a');
history.push(editor.createState());

editor.setContent('b');
history.push(editor.createState());

editor.setContent('c');
history.push(editor.createState());

editor.restore(history.pop());
editor.restore(history.pop());

console.log(editor.getContent());
