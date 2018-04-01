import EventEmitter from "events";
import {aggregation} from "../../utils/ObjetUtils";
import Character from "../character/Character";
import Inventory from "../inventory/Inventory";
import Eventable from "../event/Eventable";
import ConsoleInterface from "../interface/ConsoleInterface";

class Player extends aggregation(Eventable, Character, ConsoleInterface) {
  constructor (x, y, direction = "FORWARD", invSize, invContent) {
    super(x, y, direction, invSize, invContent);
    this.interactionsList = [];
    this.inventory = new Inventory();
    this.eventEmitter = new EventEmitter();
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
