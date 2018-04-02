class MoveEvent {
  constructor (newX, newY, oldX, oldY, target) {
    this.newX = newX;
    this.newY = newY;
    this.oldX = oldX;
    this.oldY = oldY;
    this.target = target;
  }
}

export default MoveEvent;
