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

    window.onEachFrame = (function() {
        return window.requestAnimationFrame ||
        window.webkitReqestAnimationFrame ||
        window.mozReqestAnimationFrame ||
        window.oReqesteAnimationFrame ||
        window.msReqestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var gameLoop = (function() {
        var loops = 0, skipTicks = 1000 / 60, maxFrameSkip = 10, nextGameTick = (new Date).getTime();

        return function() {
            loops = 0;
            logicEngineService.update();
            keyEventService.register(players[0]);

            nextGameTick += skipTicks; loops++;

            if ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
                renderingService.drawFrame();
            }
            window.onEachFrame(gameLoop);
        };
    })();

    window.onEachFrame(gameLoop);
}]);
