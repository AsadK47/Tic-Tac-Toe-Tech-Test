"use strict";

function Game() {
  this.current_player = "X";
  this.grid = [[null, null, null], [null, null, null], [null, null, null]];
  this.move_counter = 0;
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
  this.move_counter++;
  this.switchTurn();
};

Game.prototype.moveCounter = function() {
  return this.move_counter;
};

Game.prototype.checkWinner = function() {
  if ((this.grid[0][0] && this.grid[0][1] && this.grid[0][2] === "X") || "O") {
    this.switchTurn();
    return "Player " + this.current_player + " Won!";
  }
};
