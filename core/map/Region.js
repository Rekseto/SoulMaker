class Region {
  constructor(x,y,file) {
    this.x = x;
    this.y = y;
    this.map = file; // TODO map parser
    this.logicMap = file;
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
