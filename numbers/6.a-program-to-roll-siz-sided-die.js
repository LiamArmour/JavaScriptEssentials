'use strict';
var diceRoll = function(sides) {
    this.sides = sides || 6;
}
diceRoll.prototype.roll = function() {
    return Math.floor((Math.random()*this.sides)+1);
}
var die = new diceRoll();

console.log(die.roll());