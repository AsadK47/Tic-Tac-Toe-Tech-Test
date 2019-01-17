"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has player 1 start the game", function() {
    expect(game.currentPlayer()).toEqual("first");
  });

  it("switches the players turn", function() {
    game.switchTurn();
    expect(game.currentPlayer()).toEqual("second");
  });

  it("expects grid to be an array of arrays", function() {
    expect(game.showGrid()).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });
});
