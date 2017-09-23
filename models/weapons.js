gameApp.factory('weaponsClass', ['projectileClass',
function(projectileClass) {
    return {
        datgun: {
            type: 'gun',
            damage: 10,
            projectileSpeed: 20,
            act: function(direction, location) {
                new Projectile(this, direction, location);
            }
        }
    };
}]);
