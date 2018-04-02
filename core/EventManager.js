import EventEmitter from "events"

class EventManager extends EventEmitter {
  constructor () {
    super();

    process.nextTick(() => {
      this.emit("ready");
    });
  }
}

export default new EventManager()
