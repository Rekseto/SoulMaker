import InventoryError from "./InventoryError";

class Inventory {
  constructor(baseSize) {
    this.size = baseSize;
    this.inv = [];
  }

  addItem(item) {
    const {size,inv} = this;
    if(inv.length < size) {
      inv.push(item);
    } else {
      return new InventoryError();
    }
  }
}
