import EventManager from "../EventManager";

export default class Eventable {
  constructor () {
    this.emitter = EventManager;
  }
}
