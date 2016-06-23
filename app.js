var gameApp = angular.module('app', []);

gameApp.directive('ssCanvas', ['renderingService', function(renderingService) {
    return {
        restrict: 'AEC',
        template: '<div id="game-container">\
        <canvas class="game-canvas" id="sprite-canvas" width="800" height="480"></canvas>\
        <canvas class="game-canvas" id="background-canvas" width="800" height="480"></canvas>\
        </div>',
        link: function(scope, element) {
            var canvi = element.find('canvas');
            renderingService.initialize(canvi[0], canvi[1]); // (sprite-layer, background)
        }
    };
}]);

gameApp.controller('main', ['playerClass', 'logicEngineService', 'renderingService', 'keyEventService', 'mobClass',
function(playerClass, logicEngineService, renderingService, keyEventService, mobClass) {
    var players = [playerClass.create()];
    var mobs = [mobClass.createRedMob()];

    renderingService.activeSprites = mobs.concat(players);

    function gameLoop() {
        for (var i = 0; i < renderingService.activeSprites.length; i++) {
            logicEngineService.processSprite(renderingService.activeSprites[i], i);
        }

        renderingService.clearCanvas();
        keyEventService.register(players[0]);
        for (i = 0; i < renderingService.activeSprites.length; i++) {
            if (!renderingService.activeSprites[i].blinking) { renderingService.drawCircle(renderingService.activeSprites[i], i); }
        }
        renderingService.drawFloor();
    }

    setInterval(gameLoop, 10);
}]);
