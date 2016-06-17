gameApp.factory('graphicsEngineService', ['collisionService',
function(collisionService) {
    return {
        activeSprites: [],
        initialize: function(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
        },
        clearCanvas: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        draw: function(object, index) {
            object.location.x += object.horzV;
            object.location.y += object.vertV;
            if (!collisionService.collideFloor(this.canvas, object)) {
                object.resolveGravity();
            } else {
                if (object.projectile) { this.activeSprites.splice(index, 1); }
            }
            if (object.projectile) { collisionService.collideProjectile(object, index, this.activeSprites); }
            else { 
                object.setEdges();
                // characters
                if (object.player) {
                    collisionService.collideCharacter(object, index, this.activeSprites);
                }
            }
            // draws a circle every time
            // check for radius first and draw square if no radius
            this.ctx.beginPath();
            this.ctx.arc(object.location.x, object.location.y, object.radius, 0, Math.PI*2, false);
            this.ctx.fillStyle = object.color;
            this.ctx.fill();
            this.ctx.closePath();
        },
        drawFloor: function() {
            this.ctx.beginPath();
            this.ctx.rect(0, this.canvas.height - 10, this.canvas.width, 10);
            this.ctx.fillStyle = 'red';
            this.ctx.fill();
            this.ctx.closePath();
        }
    };
}]);
