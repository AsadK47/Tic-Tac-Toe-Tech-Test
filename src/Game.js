"use strict";

function Game() {
  this.current_player = "X";
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
}

Game.prototype.currentPlayer = function() {
  return this.current_player;
};

Game.prototype.switchTurn = function() {
  if (this.currentPlayer() === "X") {
    this.current_player = "O";
  } else if (this.currentPlayer() === "O") {
    this.current_player = "X";
  }
};

Game.prototype.showGrid = function() {
  return this.grid;
};

Game.prototype.playerMove = function(row, column) {
  this.grid[row][column] = this.currentPlayer();
  this.switchTurn();
};
