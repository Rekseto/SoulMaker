import {aggregation} from "../../utils/ObjectUtils";
import Character from "../character/Character";
import ConsoleInterface from "../interface/ConsoleInterface";
import MoveEvent from "../event/events/MoveEvent";

class Player extends aggregation(Character, ConsoleInterface) {
  constructor (x, y, region, direction, invSize, invContent) {
    super(x, y, region, direction, invSize, invContent);
    this.interactionsList = [];
    this.activeQuests = [];
    this.completedQuests = [];
  }

  moveForward () {
    this.move(this.x, this.y++);
  }

  moveBackward () {
    this.move(this.x, this.y++);
  }

  moveLeft () {
    this.move(this.x--, this.y);
  }

  move (x, y) {
    if (this.region.canMove(x, y)) {
      this.emitter.emit("PlayerMoveEvent", new MoveEvent(
        x, y, this.x, this.y, this))

      this.x = x;
      this.y = y;
    }
  }

  moveRight () {
    this.move(this.x++, this.y);
  }
}

export default Player;
