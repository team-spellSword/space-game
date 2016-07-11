gameApp.factory('playerClass', ['environmentConstants', 'tileMap', 'weaponsClass', 'renderingService',
function(environmentConstants, tileMap, weaponsClass, renderingService) {
    return {
        create: function() {
            return {
                // moving x moves it left and right???! should move it up and down right?
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
                    var xInterval = renderingService.tileLayer.width / tileMap.cols;
                    var yInterval = renderingService.tileLayer.height / tileMap.rows;                    
                    // if my bottom is touching the tile's top 
                    // and it's x location is within tile's left and right edge,
                    // this.x is larger than the tile's y * interval (left edge)
                    // this.x is smaller than the tile's y * interval * 2
                    // don't move down.
                    // if (this.bottomEdge >= xInterval * x && this.location.x >= yInterval * y && this.location.x <= yInterval * y + yInterval) {
                    if (this.bottomEdge >= xInterval * x) {
                        // this.vertV = 0;
                        console.log(y);
                    }

                    // if my right is touching it's left, don't move left.
                },
                collideWith: function(mob) {
                    //check top: check right crossing mob left and top within mob body but and if left crosses mob right. doesn't check left cross mob right
                    if (this.rightEdge >= mob.leftEdge && this.topEdge <= mob.bottomEdge && this.topEdge >= mob.topEdge && this.leftEdge <= mob.rightEdge) {return true;}
                    // or
                    //check bottom when mob is above (commit: ...takes two hits)
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
