import { CompositeCommand } from '../../src/DesignPatterns/command/photoshop';

class MockCommand {
  public execute() {
    return 'command';
  }
}

describe('Command Pattern /', () => {
  let compositeCommand;
  beforeEach(() => {
    compositeCommand = new CompositeCommand();
  });

  describe('if a command is added', () => {
    it('should be in the composize commands', () => {
      compositeCommand.add(new MockCommand());

      expect(compositeCommand.getCommands.length).toBe(1);
      expect(compositeCommand.getCommands[0].execute()).toBe('command');
    });
  });
});
