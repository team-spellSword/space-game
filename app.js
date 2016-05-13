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

gameApp.controller('main', ['playerClass', 'graphicsEngineService', 'keyEventService',
function(playerClass, graphicsEngineService, keyEventService) {
    var player1 = playerClass.create();

    var draw = function() {
        graphicsEngineService.clearCanvas();
        keyEventService.register(player1);
        graphicsEngineService.draw(player1);
        graphicsEngineService.drawFloor();
    };

    setInterval(draw, 10);
}]);
