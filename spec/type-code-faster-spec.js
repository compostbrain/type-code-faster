'use babel';

import TypeCodeFaster from '../lib/type-code-faster';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

fdescribe('TypeCodeFaster', () => {
  let worspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('type-code-faster');

  describe('when the type-code-faster:practiceSession event is triggered', () => {
    it('intercepts keyboard input', () => {
      expect(atom.workspace.handleKeyboardEvent)
    });
  });
  });
});
