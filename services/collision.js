gameApp.factory('collisionService', [function() {
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
        }
    };
}]);
