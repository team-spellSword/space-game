gameApp.factory('playerClass', ['environmentConstants', 'weaponsClass',
function(environmentConstants, weaponsClass) {
    return {
        create: function() {
            return {
                location: { x: 0, y: 0 },
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
                },
                collideWith: function(mob) {
                        if (
                            //right jump: check right crossing mob left and top within mob body while left not crossing mob right.
                            (this.rightEdge >= mob.leftEdge && this.topEdge <= mob.bottomEdge && this.topEdge >= mob.topEdge && !this.leftEdge >= mob.rightEdge)
                            //left jump: check left crossing mob right and top within mob body while right not crossing mob left.
                            // (this.leftEdge >= mob.rightEdge && this.topEdge <= mob.bottomEdge && this.topEdge >= mob.topEdge && !this.rightEdge >= mob.leftEdge)
                        ) { console.log('touch'); }
                }           
            };
        }
    };
}]);
