gameApp.factory('projectileClass', ['graphicsEngineService', 'environmentConstants',
function(graphicsEngineService, environmentConstants) {
    return {
        createBullet: function(weapon, direction, location) {
            function calcV() {
                if (direction === 'right') {
                    return weapon.projectileSpeed;
                } else {
                    return -weapon.projectileSpeed;
                }
            }
            var bullet = {
                location: Object.create(location),
                color: 'white',
                radius: 2,
                horzV: calcV(),
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                }
            };
            graphicsEngineService.activeSprites.push(bullet);
        }
    };
}]);
