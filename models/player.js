gameApp.factory('playerClass', ['environmentConstants', 'tileMap', 'weaponsClass', 'renderingService',
function(environmentConstants, tileMap, weaponsClass, renderingService) {
    return {
        create: function() {
            return {
                location: { x: 100, y: 0 },
                direction: 'right',
                color: 'blue',
                radius: 20,
                maxSpeed: 4.5,
                acceleration: 0.25,
                horzV: 0, //positive is right
                vertV: 0, //positive is down
                weapon: weaponsClass.datgun,
                acted: false,
                hitPoints: [50, 50],
                player: true,
                blinking: false,
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                setEdges: function() {
                    this.leftEdge = this.location.x - this.radius;
                    this.rightEdge = this.location.x + this.radius;
                    this.topEdge = this.location.y - this.radius;
                    this.bottomEdge = this.location.y + this.radius;
                },
                act: function() {
                    if (!this.acted) { this.weapon.act(this.direction, this.location); }
                    this.acted = true;
                },
                moveLeft: function() {
                    this.direction = 'left';
                    if (this.horzV > -this.maxSpeed) {
                        this.horzV -= this.acceleration;
                    }
                },
                moveRight: function() {
                    this.direction = 'right';
                    if (this.horzV < this.maxSpeed) {
                        this.horzV += this.acceleration;
                    }
                },
                slow: function() {
                    if (this.horzV > 0) {
                        this.horzV -= this.acceleration;
                    } else if (this.horzV < 0) {
                        this.horzV += this.acceleration;
                    }
                },
                jump: function() {
                    if (this.grounded) {
                        this.vertV -= 12.5;
                    }
                    this.grounded = false;
                },
                tileInteract: function(tile, y, x) {
                    // Not implemented
                },
                collideWith: function(mob) {
                    if (this.rightEdge >= mob.leftEdge && this.topEdge <= mob.bottomEdge && this.topEdge >= mob.topEdge && this.leftEdge <= mob.rightEdge) {return true;}
                },
                takeHit: function(damage, activeSprites) {
                    this.hitPoints[0] -= damage;
                    if (this.hitPoints[0] < 1) {
                        this.blinking = true;
                        if (this.hitPoints[0] < 1) { activeSprites.splice(activeSprites.indexOf(this), 1); }
                    }
                }
            };
        }
    };
}]);
