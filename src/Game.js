"use strict";

function Game() {
  this.current_player = "first";
}

Game.prototype.currentPlayer = function() {
  return this.current_player;
};
