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
      computer: 'x'
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

    scope.userMove = function(id) {
      for (let i = 0; i < scope.tiles.length; i++) {
        if (scope.tiles[i].id === id) {
          scope.tiles[i].content = 'o';
        }
      }
      checkifWin(scope.contents.user);
      setTimeout(computerMove(), 2000);
    }

    let checkifWin = function(value) {
      for (let i = 0; i < scope.winningSettings.length; i++) {
        if (scope.tiles[scope.winningSettings[i][0]].content === value && scope.tiles[scope.winningSettings[i][1]].content === value && scope.tiles[scope.winningSettings[i][2]].content === value) {
          scope.winner = 'User';
          console.log(scope.winner);
          return;
        }
      }
    }

    let computerMove = function() {
      console.log('kom');
    };
    
  });
})();
