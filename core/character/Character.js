import {aggregation} from "../../utils/ObjetUtils";

import Moveable from "./Moveable";
import Eventable from "../event/Eventable";

class Character extends aggregation(Moveable,Eventable) {
  constructor(x,y,region , direction="FORWARD") {
    super(x,y,direction,region);
  }

  
}
