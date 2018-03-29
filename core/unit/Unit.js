import {aggregation} from "../../utils/ObjetUtils";

import Moveable from "./Moveable";

class Unit extends aggregation(Moveable) {
  constructor(x,y,region , direction="FORWARD") {
    super(x,y,direction,region);
  }
}
