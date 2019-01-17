"use strict";

function Game() {
  this.current_player = "first";
}

Game.prototype.currentPlayer = function() {
  return this.current_player;
};

Game.prototype.switchTurn = function() {
  if (this.current_player === "first") {
    this.current_player = "second";
  } else if (this.current_player === "second") {
    this.current_player = "first";
  }
};
