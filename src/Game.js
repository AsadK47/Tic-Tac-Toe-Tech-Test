"use strict";

function Game() {
  this.current_player = "first";
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
}

Game.prototype.currentPlayer = function() {
  return this.current_player;
};

Game.prototype.switchTurn = function() {
  if (this.currentPlayer() === "first") {
    this.current_player = "second";
  } else if (this.currentPlayer() === "second") {
    this.current_player = "first";
  }
};

Game.prototype.showGrid = function() {
  return this.grid;
};
