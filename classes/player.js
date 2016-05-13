gameApp.factory('playerClass', ['environmentConstants', function(environmentConstants) {
    return {
        create: function() {
            return {
                location: {x: 0, y: 0},
                direction: 'right',
                color: 'white',
                radius: 20,
                speed: 5,
                acceleration: 1,
                horzV: 0, //positive is right
                vertV: 0, //positive is down
                weapon: {},
                resolveGravity: function() {
                    this.vertV += environmentConstants.gravityFactor;
                },
                act: function() {

                },
                jump: function() {
                    if (this.vertV === 0) {
                        this.vertV = -10;
                    }
                }
            };
        }
    };
}]);
