import {aggregation} from "../../utils/ObjectUtils";
import Character from "../character/Character";
import ConsoleInterface from "../interface/ConsoleInterface";

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

  moveRight () {
    this.move(this.x++, this.y);
  }
}

export default Player;
