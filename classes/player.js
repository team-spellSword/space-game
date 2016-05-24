gameApp.factory('playerClass', ['environmentConstants', 'weaponsClass',
function(environmentConstants, weaponsClass) {
    return {
        create: function() {
            return {
                location: { x: 0, y: 0 },
                direction: 'right',
                color: 'white',
                radius: 20,
                maxSpeed: 4.5,
                acceleration: 0.25,
                horzV: 0, //positive is right
                vertV: 0, //positive is down
                weapon: weaponsClass.datgun,
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
                        this.vertV -= 12.5;
                    }
                    this.grounded = false;
                }
            };
        }
    };
}]);
