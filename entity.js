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

function Enemy(x, y, health) {
    Entity.call(this, x, y);
    this.health = health;
}

function Player(x, y) {
    Entity.call(this, x, y);
    this.update = function (input) {return true;};
    this.shoot = function () { }; //TODO: Shooting Functionality
    this.dive = function () { }; //TODO: Diving 
}

function Bullet(x, y, speed) {
    Entity.call(this, x, y);
    this.update = function () {return true;} //TODO: Bullet Movement
}

export {Entity, Meteor, Enemy};