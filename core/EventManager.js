import EventEmitter from "events"

class EventManager extends EventEmitter {
  constructor () {
    super();
    this.length = 0;
    this.runningEvent = false;

    this.on("EventQueueEmpty", function () {
      this.runningEvent = false;
      // For that event will listen all interactable objects
    })
  }

  pushEvent (catcher, additional = {}) {
    if (this.runningEvent) {
      const node = {item: {catcher, additional}};
      if (this.last) {
        this.last = this.last.next = node;
      } else {
        this.last = this.first = node;
      }
      this.length++;
    } else {
      catcher.runEvent(additional).then(res => {
        this.eventDone();
      });
    }
  }

  eventDone () {
    if (this.length === 0) this.emit("EventQueueEmpty");
    let node = this.first;
    if (node) {
      this.first = node.next;
      if (!(--this.length)) {
        this.last = undefined;
      }
      node.catcher.runEvent(node.additional).then(res => {
        this.eventDone();
      })
    }
  }
}
export default new EventManager()
