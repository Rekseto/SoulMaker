import CatcherManager from "../CatcherManager";

export default class Eventable {
  constructor () {
    this.emitter = CatcherManager;
  }
}
