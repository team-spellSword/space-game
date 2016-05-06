var gameApp = angular.module('app', []);
gameApp.controller('main', ['playerClass', function(playerClass) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var player1 = playerClass.create();

    var draw = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player1.draw(ctx);
    };

    setInterval(draw, 10);
}]);
