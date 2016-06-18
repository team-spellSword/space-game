gameApp.factory('graphicsEngineService', ['collisionService',
function(collisionService) {
    return {
        activeSprites: [],
        initialize: function(spriteCanvas, backgroundCanvas) {
            this.spriteLayer = spriteCanvas;
            this.spriteCtx = spriteCanvas.getContext('2d');

            this.backgroundLayer = backgroundCanvas;
            this.backgroundCtx = backgroundCanvas.getContext('2d');
        },
        clearCanvas: function() {
            this.spriteCtx.clearRect(0, 0, this.spriteLayer.width, this.spriteLayer.height);
        },
        draw: function(object, index) {
            object.location.x += object.horzV;
            object.location.y += object.vertV;
            if (!collisionService.collideFloor(this.spriteLayer, object)) {
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
            this.spriteCtx.beginPath();
            this.spriteCtx.arc(object.location.x, object.location.y, object.radius, 0, Math.PI*2, false);
            this.spriteCtx.fillStyle = object.color;
            this.spriteCtx.fill();
            this.spriteCtx.closePath();
        },
        drawFloor: function() {
            this.spriteCtx.beginPath();
            this.spriteCtx.rect(0, this.spriteLayer.height - 10, this.spriteLayer.width, 10);
            this.spriteCtx.fillStyle = 'red';
            this.spriteCtx.fill();
            this.spriteCtx.closePath();
        }
    };
}]);
