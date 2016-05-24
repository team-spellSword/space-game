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
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
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
                }
            };
        }
    };
}]);
