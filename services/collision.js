gameApp.factory('collisionService', ['tileMap', 'renderingService', function(tileMap, renderingService) {
    return {
        collideFloor: function(canvas, object) {
            if (object.location.y + object.radius >= canvas.height - 10) {
                object.location.y = canvas.height - 10 - object.radius;
                object.grounded = true;
                object.vertV = 0;
                object.collided = true;
                return true;
            } else {
                return false;
            }
        },
        collideProjectile: function(projectile, index, activeSprites) {
            for (var i = 0; i < activeSprites.length; i++) {
                if (!activeSprites[i].projectile && projectile.collideWith(activeSprites[i])) {
                    activeSprites[i].takeHit(projectile.damage, activeSprites);
                    activeSprites.splice(activeSprites.indexOf(projectile), 1);
                    break;
                }
            }
        },
        collideCharacter: function(character, index, activeSprites) {
            for (var i = 0; i < activeSprites.length; i++) {
                if (!activeSprites[i].projectile && character !== activeSprites[i] && character.collideWith(activeSprites[i])) {
                    character.takeHit(activeSprites[i].damage, activeSprites);
                    break;
                }
            }
        },
        collideTile: function(sprite, index) {
            // Not fully implemented
            for (var y = 0; y < tileMap.tiles.length; y++) {
                for (var x = 0; x < tileMap.tiles[y].length; x++) {
                    if (tileMap.keys[tileMap.tiles[y][x]] !== 'solid') {
                        sprite.tileInteract(tileMap.tiles[y][x], y, x);
                    }
                }
            }
        }
    };
}]);
