import DirectionConstants from "../constants/DirectionConstants";
import MoveEvent from "../event/events/MoveEvent";

class Moveable {
  constructor (x, y, region, direction) {
    this.x = x;
    this.y = y;
    this.region = region;
    this.direction = DirectionConstants[direction];
  }

  changeRegion (reg) {
    this.region = reg;
  }

  move (x, y) {
    if (this.region.canMove(x, y)) {
      this.emitter.emit("MoveEvent", new MoveEvent(x, y, this.x, this.y, this))
      this.x = x;
      this.y = y;
    }
  }

  moveWithoutEvent (x, y) {
    if (this.region.canMove(x, y)) {
      this.x = x;
      this.y = y;
    }
  }

  turn (direction) {
    this.direction = direction;
  }
}

export default Moveable;
