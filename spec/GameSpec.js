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
    game.playerMove([0], [0]);
    expect(game.showGrid()).toEqual([
      ["X", null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  it("switches turns after a players turn", function() {
    game.playerMove([0], [0]);
    expect(game.currentPlayer()).toEqual("O");
  });

  it("increases the move counter", function() {
    game.playerMove([0], [0]);
    expect(game.moveCounter()).toEqual(1);
  });

  describe("Win conditions", function() {
    it("allows a player to win by capturing all rows", function() {
      game.playerMove([0], [0]); // X
      game.playerMove([1], [0]);
      game.playerMove([0], [1]); // X
      game.playerMove([1], [1]);
      game.playerMove([0], [2]); // X
      expect(game.checkWinner()).toEqual("Player X Won!");
    });
  });
});
