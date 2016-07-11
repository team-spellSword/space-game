gameApp.factory('logicEngineService', ['collisionService', 'renderingService',
function(collisionService, renderingService) {
    function processMovement(object) {
        object.location.x += object.horzV;
        object.location.y += object.vertV;
        if (!object.projectile) { object.setEdges(); }
    }

    function processCollision(object, index) {
        if (!collisionService.collideFloor(renderingService.spriteLayer, object)) {
            object.resolveGravity();
        } else if (object.projectile) {
            renderingService.activeSprites.splice(index, 1);
        }
        if (object.player) { 
            collisionService.collideCharacter(object, index, renderingService.activeSprites);
            collisionService.collideTile(object, index);
        } else if (object.mob) {
            // collisionService.collideTile(object, index);
        }
    }

    return {
        update: function() {
            for (var i in renderingService.activeSprites) {
                processMovement(renderingService.activeSprites[i]);
                processCollision(renderingService.activeSprites[i], i);
            }
        }
    };
}]);
