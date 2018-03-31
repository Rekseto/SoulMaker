import {parseMap} from "../../utils/MapParser";


class Region {
  constructor() {

  }

  async loadRegion(file) {
    this.map = await parseMap(file);
  }

  canMove(x,y) {
    if(this.x >= x && this.y >= y) {
      return true;
    } else {
      return false;
    }
  }


}


export default Region;
