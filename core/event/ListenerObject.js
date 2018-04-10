import {aggregation} from "../../utils/ObjectUtils";
import Eventable from "./Eventable";
import Moveable from "../character/Moveable";

class ListenerObject extends aggregation(Eventable, Moveable) {
  constructor (event, fnc) {
    super();
    this.emitter.on(event, fnc);
  }
}

export default ListenerObject;
