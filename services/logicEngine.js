// Imports pending

class LogicEngineService {
    static update() {
        for (const i in renderingService.activeSprites) {
            processMovement(renderingService.activeSprites[i]);
            processCollision(renderingService.activeSprites[i], i);
        }
    }
}

function processMovement(object) {
    object.location.x += object.horzV;
    object.location.y += object.vertV;
    if (!object.projectile) { object.setEdges(); }
}

function processCollision(object, index) {
    // Not fully implemented
    if (!collisionService.collideFloor(renderingService.spriteLayer, object)) object.resolveGravity();
    else if (object.projectile) {
        collisionService.collideProjectile(object, index, renderingService.activeSprites);
    }
    if (object.player) {
        collisionService.collideCharacter(object, index, renderingService.activeSprites);
        collisionService.collideTile(object, index);
    } else if (object.mob) {
        collisionService.collideTile(object, index);
    }
}
