class CompositeCommand implements Command {
  private commands: Command[] = [];

  add(command: Command) {
    this.commands.push(command);
  }

  public execute(): void {
    for (const command of this.commands) {
      console.log(command.execute());
    }
  }

  public get getCommands(): Command[] {
    return this.commands;
  }
}

export default CompositeCommand;
