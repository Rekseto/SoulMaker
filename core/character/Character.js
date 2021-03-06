import {aggregation} from "../../utils/ObjectUtils";

import Moveable from "./Moveable";
import Eventable from "../event/Eventable";
import Inventory from "../inventory/Inventory";

class Character extends aggregation(Moveable, Eventable) {
  constructor (x, y, region, direction, invSize, invContent) {
    super(x, y, region, direction);
    this.inventory = new Inventory(invSize, invContent);
  }

  addListener (event, fnc) {
    this.emitter.on(event, fnc);
  }
}

export default Character;
