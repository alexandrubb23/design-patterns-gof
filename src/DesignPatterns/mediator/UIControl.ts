import { EventHandler } from './EventHandler';

export abstract class UIControl {
  private eventHandlers: EventHandler[] = [];

  public addEventHandler(eventHandler: EventHandler) {
    this.eventHandlers.push(eventHandler);
  }

  protected notifyEventHandlers() {
    for (let eventHandler of this.eventHandlers) eventHandler();
  }
}
