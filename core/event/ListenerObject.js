import {aggregation} from "../../utils/ObjectUtils";
import Eventable from "./Eventable";
import Moveable from "../character/Moveable";

class ObjectListener extends aggregation(Eventable, Moveable) {
  constructor () {
    super();
  }
}

export default ObjectListener;
