'use babel';

import TypeCodeFasterView from './type-code-faster-view';
import { CompositeDisposable } from 'atom';

const characters = [
  'space', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-',
  '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<',
  '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', '{', '|', '}', '~'
]

export default {

  typeCodeFasterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.typeCodeFasterView = new TypeCodeFasterView(state.typeCodeFasterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.typeCodeFasterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'type-code-faster:practiceSession': () => this.practiceSession()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();

    this.typeCodeFasterView.destroy();
  },

  serialize() {
    return {
      typeCodeFasterViewState: this.typeCodeFasterView.serialize()
    };
  },

  practiceSession() {
    const editor = atom.workspace.getActiveTextEditor();
    const template = editor.getText();
    // variables to keep track of include:
    // cursorPosition this can advance one when any character is typed or be
    // controlled with backspace, arrow keys or enter keys

    // nextChar this will always be the character in front of the cursor

    // errorCount tracker for typing errors



    const keyboardEvent =
    const keyboardEventHandler = (keyboardEvent) => {
      console.log(keyboardEvent);
    }
    console.log(template);
  }

};
