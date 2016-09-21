gameApp.factory('mobClass', ['environmentConstants', function(environmentConstants) {
    return {
        createRedMob: function() {
            return {
                location: { x: 200, y: 0 },
                direction: 'right',
                color: 'red',
                radius: 25,
                maxSpeed: 3.5,
                acceleration: 0.25,
                horzV: -.3,
                vertV: 0,
                hitPoints: [50, 50],
                damage: 1,
                mob: true,
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                tileInteract: function() {
                    // Not Implemented
                },
                takeHit: function(damage, activeSprites) {
                    this.hitPoints[0] -= damage;
                    if (this.hitPoints[0] < 1) { activeSprites.splice(activeSprites.indexOf(this), 1); }
                },
                setEdges: function() {
                    this.leftEdge = this.location.x - this.radius;
                    this.rightEdge = this.location.x + this.radius;
                    this.topEdge = this.location.y - this.radius;
                    this.bottomEdge = this.location.y + this.radius;
                }
            };
        },
        createBlackMob: function() {
            return {
                location: { x: 600, y: 0 },
                direction: 'right',
                color: 'black',
                radius: 35,
                maxSpeed: 3.5,
                acceleration: 0.25,
                horzV: -.3,
                vertV: 0,
                hitPoints: [50, 50],
                damage: 1,
                mob: true,
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                tileInteract: function() {
                    // Not Implemented
                },
                takeHit: function(damage, activeSprites) {
                    this.hitPoints[0] -= damage;
                    if (this.hitPoints[0] < 1) { activeSprites.splice(activeSprites.indexOf(this), 1); }
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
