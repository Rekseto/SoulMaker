import InventoryError from "./InventoryError";

class Inventory {
  constructor (baseSize, baseInv = []) {
    this.size = baseSize;
    this.inv = baseInv;
  }

  increaseSize (size) {
    this.size = this.size + size;
  }

  decreaseSize (size) {
    this.size = this.size - size;
  }

  addItem (item, stack = 1) {
    const {size, inv} = this;
    if (inv.length < size) {
      inv.push({item: item, stack: stack});
      return `Otrzymałeś ${item}`;
    } else {
      throw new InventoryError();
    }
  }

  removeItem (item, stack = 1) {
    const {inv} = this;
    for (let i = 0; i < inv.length; i++) {
      if (inv[i]) {
        if (inv[i].item.id === item.id) {
          inv[i].stack = inv[i].stack - 1;
          if (inv[i].stack === 0) delete inv[i];
        }
      }
    }
  }
}

export default Inventory;
