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
            // our tiles are just an array of arrays in map constant
            // iterate and check tiles for their properties
            // if tile has a key/is solid...
            // check canvas for dimensions
            // if sprite touches a square/tile on the grid... do a thing
            // tiles will need a location which means they'll each have to be an object
            // change the tiles themselves in tileMap constant into a hash?


            for (var y = 0; y < tileMap.tiles.length; y++) {
                for (var x = 0; x < tileMap.tiles[y].length; x++) {
                    if (tileMap.keys[tileMap.tiles[y][x]] !== 'solid') {
                        sprite.tileInteract(tileMap.tiles[y][x], y, x);
                    }
                }
            }
        }
    }
}]);
