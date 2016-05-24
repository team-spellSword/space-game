gameApp.factory('weaponsClass', ['projectileClass',
function(projectileClass) {
    return {
        datgun: {
            type: 'gun',
            damage: 10,
            projectileSpeed: 3,
            act: function(direction, location) {
                projectileClass.createBullet(this, direction, location);
            }
        }
    };
}]);
