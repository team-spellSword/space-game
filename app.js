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

gameApp.controller('main', ['playerClass', 'graphicsEngineService', 'keyEventService', 'mobClass', 'collisionService',
function(playerClass, graphicsEngineService, keyEventService, mobClass, collisionService) {
    var players = [playerClass.create()];
    var mobs = [mobClass.circleMob(), mobClass.circleMob()];
    graphicsEngineService.activeSprites = mobs.concat(players);

    function gameLoop() {
        graphicsEngineService.clearCanvas();
        keyEventService.register(players[0]);
        for (var i = 0; i < graphicsEngineService.activeSprites.length; i++) {
            collisionService.collideProjectile(i, graphicsEngineService.activeSprites);
            graphicsEngineService.draw(graphicsEngineService.activeSprites[i], i);
        }
        graphicsEngineService.drawFloor();
    }

    setInterval(gameLoop, 10);
}]);
