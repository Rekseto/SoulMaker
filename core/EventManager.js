import EventEmitter from "events"
import EventQueue from "../utils/EventQueue";

class EventManager extends EventEmitter {
  constructor () {
    super();

    this.runningEvent = false;

    process.nextTick(() => {
      this.emit("ready");
    });

    this.queue = new EventQueue();

    this.on("EventFinishes", function () {
      if (this.queue.getQueue().length === 0) {
        this.emit("EventQueueEmpty");
      } else {
        this.runningEvent = true;
        this.queue.dequeue().runEvent();
      }
    });

    this.on("EventQueueEmpty", function () {
      this.runningEvent = false;
      // For that event will listen all interactable objects
    })
  }

  pushToQueue (event) {
    if (!this.runningEvent) {
      this.runningEvent = true;
      event.runEvent();
    } else {
      this.queue.enqueue();
    }
  }
}

export default new EventManager()
