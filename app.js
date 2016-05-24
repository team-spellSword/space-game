var gameApp = angular.module('app', []);

gameApp.directive('ssCanvas', ['graphicsEngineService', function(graphicsEngineService) {
    return {
        restrict: 'AEC',
        template: '<canvas id="canvas" width="800" height="480"></canvas>',
        link: function(scope, element) {
            var canvas = element.find('canvas')[0];
            graphicsEngineService.initialize(canvas);
        }
    };
}]);

gameApp.controller('main', ['playerClass', 'graphicsEngineService', 'keyEventService', 'mobClass',
function(playerClass, graphicsEngineService, keyEventService, mobClass) {
    var player1 = playerClass.create();
    var players = [player1];
    var mobs = [mobClass.circleMob(), mobClass.circleMob()];
    var characters = mobs.concat(players);

    function draw() {
        graphicsEngineService.clearCanvas();
        keyEventService.register(player1);
        for (var i = 0; i < characters.length; i++) {
            graphicsEngineService.draw(characters[i]);
        }
        graphicsEngineService.drawFloor();
    }

    setInterval(draw, 10);
}]);
