// Imports pending

const activeKeys = (activeKeys || []);

window.addEventListener('keydown', e => activeKeys[e.keyCode] = true);
window.addEventListener('keyup', e => activeKeys[e.keyCode] = false);

class KeyEventService {
    static register(player) {
    // Active Keys
        // Move left
        if (activeKeys[keyBindingConstants.left]) player.moveLeft();

        // Move right
        if (activeKeys[keyBindingConstants.right]) player.moveRight();

        // Jump
        if (activeKeys[keyBindingConstants.jump]) player.jump();

        // Act (shoot gun)
        if (activeKeys[keyBindingConstants.act]) player.act();

        // Stop acting state (allows player to act again)
        if (!activeKeys[keyBindingConstants.act]) player.acted = false;

    // Key Based Processes
        // Slow down if not moving left or right
        if (!activeKeys[keyBindingConstants.left] && !activeKeys[keyBindingConstants.right]) { 
            player.slow(); 
        }
    }
}
