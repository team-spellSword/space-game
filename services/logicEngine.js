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
        if (object.player) { collisionService.collideCharacter(object, index, renderingService.activeSprites); }
    }

    return {
        processSprite: function(sprite, index) {
            processMovement(sprite);
            processCollision(sprite, index);
        }
    };
}]);
