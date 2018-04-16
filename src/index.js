import style from "./_scss/main.scss";

(function() {

  var app = angular.module('ticTacToe', [ ]);

  app.controller('GameController', function() {
    let scope = this;

    scope.tiles = [
      {id: '11', content: ''},
      {id: '12', content: ''},
      {id: '13', content: ''},
      {id: '21', content: ''},
      {id: '22', content: ''},
      {id: '23', content: ''},
      {id: '31', content: ''},
      {id: '32', content: ''},
      {id: '33', content: ''}
    ];

    scope.contents = {
      user: 'o',
      computer: 'x',
      empty: ''
    };

    scope.winningSettings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    scope.winner;
    scope.disabled = false;

    scope.userMove = function(index) {
      if (scope.tiles[index].content === scope.contents.empty) {
        scope.tiles[index].content = scope.contents.user;
      } else {
        return;
      }
      if (checkIfWin(scope.contents.user)) {
        return;
      } else {
        computerMove();
      }
    }

    let checkRow = function(value, move) {
      let value1, value2, value3;
      for (let i = 0; i < scope.winningSettings.length; i++) {
        value1 = scope.tiles[scope.winningSettings[i][0]].content;
        value2 = scope.tiles[scope.winningSettings[i][1]].content;
        value3 = scope.tiles[scope.winningSettings[i][2]].content;
        if (value1 === value && value2 === value && value3 === scope.contents.empty) {
          scope.tiles[scope.winningSettings[i][2]].content = move;
          return true;
        } else if (value1 === value && value2 === scope.contents.empty && value3 === value) {
          scope.tiles[scope.winningSettings[i][1]].content = move;
          return true;
        } else if (value1 === scope.contents.empty && value2 === value && value3 === value) {
          scope.tiles[scope.winningSettings[i][0]].content = move;
          return true;
        }
      }
    }

    let checkIfWin = function(value) {
      for (let i = 0; i < scope.winningSettings.length; i++) {
        if (scope.tiles[scope.winningSettings[i][0]].content === value && scope.tiles[scope.winningSettings[i][1]].content === value && scope.tiles[scope.winningSettings[i][2]].content === value) {
          scope.winner = value;
          scope.disabled = true;
          return true;
        }
      }
    }

    let computerMove = function() {
      // win = check winning positions, if there is a position with two x and third empty - put x
      if (checkRow(scope.contents.computer, scope.contents.computer));
      // block = check winning positions, if there is a position with two o and third empty - put x
      else if (checkRow(scope.contents.user, scope.contents.computer));
      // else find empty tile
      else { 
        for (let i = 0; i < scope.tiles.length; i++) {
          if (scope.tiles[i].content === scope.contents.empty) {
            scope.tiles[i].content = scope.contents.computer;
            return;
          }
        }
      }
      checkIfWin(scope.contents.computer);


    };

    // play again button
    
  });
})();
