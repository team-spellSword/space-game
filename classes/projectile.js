gameApp.factory('projectileClass', ['graphicsEngineService', 'environmentConstants',
function(graphicsEngineService, environmentConstants) {
    return {
        createBullet: function(weapon, direction, location) {
            var dir = {'right': weapon.projectileSpeed, 'left': -weapon.projectileSpeed};
            var bullet = {
                location: Object.create(location),
                projectile: true,
                color: 'black',
                radius: 2,
                horzV: dir[direction],
                vertV: 0,
                resolveGravity: function() {
                    // this.vertV += environmentConstants.gravityFactor;
                },
                collideWith: function(object) {
                    if (
                            (this.location.x >= object.leftEdge() && this.location.x <= object.rightEdge()) && // Collide x
                            (this.location.y >= object.bottomEdge() && this.location.y <= object.topEdge()) // Collide y
                        ) { return true; }
                }
            };
            graphicsEngineService.activeSprites.push(bullet);
        }
    };
}]);
