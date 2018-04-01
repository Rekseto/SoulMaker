import DirectionConstants from "../constants/DirectionConstants";
import MoveEvent from "../event/events/MoveEvent";

class Moveable {
  constructor (x, y, direction, region) {
    this.x = x;
    this.y = y;
    this.direction = DirectionConstants[direction];
    this.region = region;
  }

  changeRegion (reg) {
    this.region = reg;
  }

  move (x, y) {
    if (this.region.canMove(x, y)) {
      this.emitter.emit("MoveEvent", new MoveEvent(x, y, this.x, this.y))
      this.x = x;
      this.y = y;
    }
  }

  turn (direction) {
    this.direction = direction;
  }
}

export default Moveable;
