import {aggregation} from "../../utils/ObjetUtils";

import Moveable from "./Moveable";
import Eventable from "../event/Eventable";
import Inventory from "../inventory/Inventory";

class Character extends aggregation(Moveable, Eventable) {
  constructor (x, y, direction = "FORWARD", invSize, invContent) {
    super(x, y, direction);
    this.inventory = new Inventory(invSize, invContent);
  }
}

export default Character;
