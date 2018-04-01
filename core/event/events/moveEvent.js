class MoveEvent {
  constructor (newX, newY, oldX, oldY) {
    this.newX = newX;
    this.newY = newY;
    this.oldX = oldX;
    this.oldY = oldY;
  }
}

export default MoveEvent;
