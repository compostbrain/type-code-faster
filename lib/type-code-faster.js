'use babel';

import TypeCodeFasterView from './type-code-faster-view';
import { CompositeDisposable } from 'atom';

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
      'type-code-faster:toggle': () => this.toggle()
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

  toggle() {
    console.log('TypeCodeFaster was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
