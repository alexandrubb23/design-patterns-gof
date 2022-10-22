import {
  CompositeCommand,
  BlackAndWhiteCommand,
  ResizeCommand,
} from '../../src/DesignPatterns/command/photoshop';

describe('Photoshop Actions Command Pattern /', () => {
  let compositeCommand;
  beforeEach(() => {
    compositeCommand = new CompositeCommand();
  });

  describe('Single Command /', () => {
    describe('BlackAndWhite Command /', () => {
      describe('if a BlackAndWhite Command is added', () => {
        it('should be in the composite commands', () => {
          compositeCommand.add(new BlackAndWhiteCommand());

          expect(compositeCommand.getCommands[0]).toBeInstanceOf(
            BlackAndWhiteCommand
          );
        });
      });

      describe('if the replay button is pressed', () => {
        it('should execute BlackAndWhite command', () => {
          compositeCommand.add(new BlackAndWhiteCommand());

          expect(compositeCommand.getCommands.length).toBe(1);
          expect(compositeCommand.getCommands[0].execute()).toBe(
            'Black and white'
          );
        });
      });
    });

    describe('Resize Command /', () => {
      describe('if a Resize Command is added', () => {
        it('should be in the composite commands', () => {
          compositeCommand.add(new ResizeCommand());

          expect(compositeCommand.getCommands.length).toBe(1);
          expect(compositeCommand.getCommands[0]).toBeInstanceOf(ResizeCommand);
        });
      });

      describe('if the replay button is pressed', () => {
        it('should execute Resize command', () => {
          compositeCommand.add(new ResizeCommand());

          expect(compositeCommand.getCommands[0].execute()).toBe('Resize');
        });
      });
    });
  });

  describe('Multiple Commands /', () => {
    beforeEach(() => {
      compositeCommand.add(new BlackAndWhiteCommand());
      compositeCommand.add(new ResizeCommand());
    });

    describe('if BlackAndWhite and Resize is added', () => {
      it('BlackAndWhite and Resize should be in the composite commands', () => {
        expect(compositeCommand.getCommands.length).toBe(2);
        expect(compositeCommand.getCommands[0]).toBeInstanceOf(
          BlackAndWhiteCommand
        );
        expect(compositeCommand.getCommands[1]).toBeInstanceOf(ResizeCommand);
      });
    });

    describe('if the replay button is pressed', () => {
      it('should execute BlackAndWhite and Resize commands', () => {
        expect(compositeCommand.getCommands[0].execute()).toBe(
          'Black and white'
        );
        expect(compositeCommand.getCommands[1].execute()).toBe('Resize');
      });
    });
  });
});
