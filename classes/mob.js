gameApp.factory('mobClass', ['environmentConstants', function(environmentConstants) {
    return {
        circleMob: function() {
            return {
                location: { x: 0, y: 0 },
                direction: 'right',
                color: 'red',
                radius: 25,
                maxSpeed: 3.5,
                acceleration: 0.25,
                horzV: 0,
                vertV: 0,
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                }
            };
        }
    };
}]);
