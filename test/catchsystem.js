import chai from "chai";
import path from "path";

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;

import Region from '../core/map/Region';
// Player inherits Eventable
import Player from "../core/player/Player";

import ListenerObject from "../core/event/ListenerObject";
// All tests related to EventEmitting and CatchSystem will be here
import CatcherManager from "../core/CatcherManager";


describe("CatchSystem", function () {
  describe("#emitting", function () {
    it('Should succesfully emit and react to an Event' , function(done) {
      const region = new Region(55,55);
      const player = new Player(10,10,region ,"FORWARD",  ["MacBook"]);

      let tested = false;

      const objListener = new ListenerObject("PlayerMoveEvent" , (e) => {
        tested = true;
      });
      player.moveForward()
      (tested ? done() : done('Event has been not emitted or listened'));
    })

  });

})
