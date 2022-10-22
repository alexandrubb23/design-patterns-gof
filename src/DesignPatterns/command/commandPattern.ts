import {
  CompositeCommand,
  BlackAndWhiteCommand,
  ResizeCommand,
} from './photoshop';

const compositeCommand = new CompositeCommand();

compositeCommand.add(new BlackAndWhiteCommand());
compositeCommand.add(new ResizeCommand());

compositeCommand.execute();
