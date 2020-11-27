"use strict";

function Entity(x, y) {
    this.x = x;
    this.y = y;
    this.state = "live";
    this.animationState = "idle";
}

Entity.prototype.onCollide = function (collidededWith) { console.log("ouch"); };
Entity.prototype.update = function () {return false; };

function Meteor(x, y, fallSpeed) {
    Entity.call(this, x, y);
    this.fallSpeed = fallSpeed;
}

export {Entity};