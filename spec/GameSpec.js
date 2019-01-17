"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has player 1 start the game", function() {
    expect(game.currentPlayer()).toEqual("X");
  });

  it("switches the players turn", function() {
    game.switchTurn();
    expect(game.currentPlayer()).toEqual("O");
  });

  it("expects grid to initalise as an array of arrays", function() {
    expect(game.showGrid()).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  it("expects player move to be stored in the grid array", function() {
    game.playerMove([0], [0], "X");
    expect(game.showGrid()).toEqual([
      ["X", null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });
});
