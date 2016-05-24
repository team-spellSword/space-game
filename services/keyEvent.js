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
            // Move left
            if (activeKeys[keyBindingConstants.left]) { player.moveLeft(); }
            // Move right
            if (activeKeys[keyBindingConstants.right]) { player.moveRight(); }
            // Slow down if not moving left or right
            if (!activeKeys[keyBindingConstants.left] && !activeKeys[keyBindingConstants.right]) { player.slow(); }
            // Jump
            if (activeKeys[keyBindingConstants.jump]) { player.jump(); }
            // Act (shoot gun)
            if (activeKeys[keyBindingConstants.act]) { player.act(); }
            // Stop acting state (allows player to act again)
            if (!activeKeys[keyBindingConstants.act]) { player.acted = false; }
        }
    };
}]);
