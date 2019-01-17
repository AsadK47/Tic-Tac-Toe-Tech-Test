"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has player 1 start the game", function() {
    expect(game.currentPlayer()).toEqual("first");
  });
});
