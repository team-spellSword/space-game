gameApp.factory('keyEventService', ['keyBindingConstants', function(keyBindingConstants) {

    var activeKeys = ( activeKeys || [] );

    window.addEventListener('keydown', function(e) {
        activeKeys[e.keyCode] = true;
    });

    window.addEventListener('keyup', function(e) {
        activeKeys[e.keyCode] = false;
    });

    return {
        register: function(player) {
            if (activeKeys[keyBindingConstants.left]) { player.moveLeft(); }
            if (activeKeys[keyBindingConstants.right]) { player.moveRight(); }
            if (!activeKeys[keyBindingConstants.left] && !activeKeys[keyBindingConstants.right]) { player.slow(); }
            if (activeKeys[keyBindingConstants.jump]) { player.jump(); }
        }
    };
}]);
