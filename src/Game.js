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
  for(var i = 0; i < this.grid.length; i++) {
    if (this.grid[i][0] != null && this.grid[i][0] === (this.grid[i][1] && this.grid[i][2])) {
      this.switchTurn();
      return "Player " + this.current_player + " Won!";
    } else {
      return "The is game is still running!"
    }
  }
};
