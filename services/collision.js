// Imports Pending

const floorHeight = 10;

class CollisionService {
    static collideFloor(canvas, object) {
        if (object.location.y + object.radius >= canvas.height - floorHeight) {
            object.location.y = canvas.height - floorHeight - object.radius;
            object.grounded = true;
            object.vertV = 0;
            object.collided = true;
            return true;
        }
        return false;
    }

    static collideProjectile(projectile, index, activeSprites) {
        for (let i = 0; i < activeSprites.length; i++) {
            if (!activeSprites[i].projectile && projectile.collideWith(activeSprites[i])) {
                activeSprites[i].takeHit(projectile.damage, activeSprites);
                activeSprites.splice(activeSprites.indexOf(projectile), 1);
                break;
            }
        }
    }

    static collideCharacter(character, index, activeSprites) {
        for (let i = 0; i < activeSprites.length; i++) {
            if (
                !activeSprites[i].projectile &&
                character !== activeSprites[i] &&
                character.collideWith(activeSprites[i])
            ) {
                character.takeHit(activeSprites[i].damage, activeSprites);
                break;
            }
        }
    }

    static collideTile(sprite, index) {
        // Not fully implemented (tileMap is psuedocode :O )
        for (let y = 0; y < tileMap.tiles.length; y++) {
            for (let x = 0; x < tileMap.tiles[y].length; x++) {
                if (tileMap.keys[tileMap.tiles[y][x]] !== 'solid') {
                    sprite.tileInteract(tileMap.tiles[y][x], y, x);
                }
            }
        }
    }
}
