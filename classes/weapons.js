gameApp.factory('weaponsClass', ['graphicsEngineService',
function(graphicsEngineService) {
    return {
        datgun: {
            type: 'gun',
            damage: 10,
            projectileSpeed: 30,
            act: function(location) {
                graphicsEngineService.drawProjectile(location);
            }
        }
    };
}]);
