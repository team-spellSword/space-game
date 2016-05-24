gameApp.factory('mobClass', ['environmentConstants', function(environmentConstants) {
    return {
        circleMob: function() {
            return {
                location: { x: 500, y: 0 },
                direction: 'right',
                color: 'red',
                radius: 25,
                maxSpeed: 3.5,
                acceleration: 0.25,
                horzV: -.3,
                vertV: 0,
                leftEdge: function() { return this.location.x - this.radius; },
                rightEdge: function() { return this.location.x + this.radius; },
                topEdge: function() { return this.location.y - this.radius; },
                bottomEdge: function() { return this.location.y + this.radius; },
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                }
            };
        }
    };
}]);
