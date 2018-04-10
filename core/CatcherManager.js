import EventEmitter from "events"

class CatcherManager extends EventEmitter {
  constructor () {
    super();
  }

  pushEvent (catcher, additional = {}) {
    catcher()
  }

  eventDone () {
    this.emit("EventFinished");
  }
}
export default new CatcherManager()
