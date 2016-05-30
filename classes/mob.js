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
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                takeHit: function() {
                    // Take damages
                },
                setEdges: function() {
                    this.leftEdge = this.location.x - this.radius;
                    this.rightEdge = this.location.x + this.radius;
                    this.topEdge = this.location.y - this.radius;
                    this.bottomEdge = this.location.y + this.radius;
                }
            };
        }
    };
}]);
