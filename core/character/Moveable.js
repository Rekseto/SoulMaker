import DirectionEnum from '../constants/DirectionConstants;

class Moveable {
  constructor(x,y, direction,region) {
    this.x = x;
    this.y = y;
    this.direction = DirectionConstants[direction];
    this.region = region;
  }

  changeRegion(reg) {
    this.region = reg;
  }

  move(x,y) {
    if(this.region.canMove(x,y)) {
      this.x = x;
      this.y = y;
    }
  }

  turn(direction) {
    this.direction = direction;
  }

}
