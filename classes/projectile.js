gameApp.factory('projectileClass', ['graphicsEngineService', 'environmentConstants',
function(graphicsEngineService, environmentConstants) {
    return {
        createBullet: function(weapon, direction, location) {
            var dir = {'right': weapon.projectileSpeed, 'left': -weapon.projectileSpeed};
            var bullet = {
                location: Object.create(location),
                color: 'white',
                radius: 2,
                horzV: dir[direction],
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                }
            };
            graphicsEngineService.activeSprites.push(bullet);
        }
    };
}]);
