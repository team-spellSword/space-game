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
    var players = [playerClass.create()];
    // changed "circleMob" to "createRedMob"
    // I'm working on mob function that creates random or particular types of mobs
    // so we can create a specific quantity of mobs throughout each level
    var mobs = [mobClass.createRedMob()];

    graphicsEngineService.activeSprites = mobs.concat(players);

    function gameLoop() {
        graphicsEngineService.clearCanvas();
        keyEventService.register(players[0]);
        for (var i = 0; i < graphicsEngineService.activeSprites.length; i++) {
            if (graphicsEngineService.activeSprites[i].blinking) {
                console.log('blinking');
            } else {
                graphicsEngineService.draw(graphicsEngineService.activeSprites[i], i);                
            }
        }
        graphicsEngineService.drawFloor();
    }

    setInterval(gameLoop, 10);
}]);
