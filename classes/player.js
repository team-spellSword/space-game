gameApp.factory('playerClass', ['environmentConstants', 'weaponsService',
function(environmentConstants, weaponsService) {
    return {
        create: function() {
            return {
                location: { x: 0, y: 0 },
                direction: 'right',
                color: 'white',
                radius: 20,
                maxSpeed: 3.5,
                acceleration: 0.25,
                horzV: 0, //positive is right
                vertV: 0, //positive is down
                weapon: weaponsService.datgun,
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                act: function() {
                    this.weapon.act(this.location);
                },
                moveLeft: function() {
                    if (this.horzV > -this.maxSpeed) {
                        this.horzV -= this.acceleration;
                    }
                },
                moveRight: function() {
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
                        this.vertV -= 20;
                    }
                    this.grounded = false;
                }
            };
        }
    };
}]);