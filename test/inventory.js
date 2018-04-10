import chai from "chai";

import Inventory from '../core/inventory/Inventory';
import InventoryError from '../core/inventory/InventoryError';

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;



describe('Inventory', function() {
  describe('#addItem', function() {
    it('should throw error when inventory is full', function() {
      const inventory = new Inventory(1, ["ITEM_ID"]);

      assert.throws(() => inventory.addItem("ITEM_ID"),InventoryError);
    });

    it('should return "You recived ITEM_ID" when inventory has space', function() {
      const inventory = new Inventory(1, []);

      assert.equal(inventory.addItem("ITEM_ID"), "Otrzymałeś ITEM_ID");
    });
  });
});
