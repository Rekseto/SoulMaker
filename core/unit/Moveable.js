import DirectionEnum from '../enums/DirectionEnum';

class Moveable {
  constructor(x,y, direction,region) {
    this.x = x;
    this.y = y;
    this.direction = DirectionEnum[direction];
    this.region = region;
  }

  changeRegion(reg) {
    this.region = reg;
  }

  move(x,y) {
    if(this.region.isMoveAccess(x,y)) {
      this.x = x;
      this.y = y;
    }
  }

  turnDirection(direction) {
    this.direction = direction;
  }

}
