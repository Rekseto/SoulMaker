import chai from "chai";
import path from "path";

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;


import EventManager from '../core/EventManager';
import Region from '../core/map/Region';
import Player from "../core/player/Player";
import ListenerObject from "../core/event/ListenerObject";

describe("EventManager", function () {
  describe("#EventQueue", function () {
    it('Should succesfully emit and react to an Event' , function(done) {
      const region = new Region(55,55);
      const player = new Player(10,10,region ,"FORWARD",  ["MacBook"]);
      const objListener = new ListenerObject();

      objListener.runEvent = (additional) => {
        return new Promise(resolve => {
          console.log('Działa');
          console.log(additional)
          resolve(true);
        });
      }


      objListener.emitter.on("PlayerMoveEvent", function (event) {
        objListener.emitter.pushEvent(objListener,event);
        objListener.emitter.pushEvent(objListener,event);
        objListener.emitter.pushEvent(objListener,event);
        objListener.emitter.pushEvent(objListener,event);
      });

      player.moveForward()
      objListener.emitter.on("EventQueueEmpty", function () {
        done()
      });
    });

  });
});
