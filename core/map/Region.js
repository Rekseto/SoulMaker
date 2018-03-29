class Region {
  constructor(x,y,file) {
    this.x = x;
    this.y = y;
    this.map = file; // TODO map parser
  }

  isMoveAccess(x,y) {
    return true; // TODO checking block
  }
}
