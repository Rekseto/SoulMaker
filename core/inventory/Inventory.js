import InventoryError from "./InventoryError";

class Inventory {
  constructor(baseSize, baseInv = []) {
    this.size = baseSize;
    this.inv = baseInv;
  }

  increaseSize(size) {
    this.size = this.size + size;
  }

  decreaseSize(size) {
    this.size = this.size - size;
  }

  addItem(item) {
    const {size,inv} = this;
    if(inv.length < size) {
      inv.push(item);
      return `You recived ${item}`;
    } else {
      throw new InventoryError();
    }
  }
}


export default Inventory;
