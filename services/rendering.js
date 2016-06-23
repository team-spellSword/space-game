gameApp.factory('renderingService', [function() {
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
        drawCircle: function(circle) {
            this.spriteCtx.beginPath();
            this.spriteCtx.arc(circle.location.x, circle.location.y, circle.radius, 0, Math.PI*2, false);
            this.spriteCtx.fillStyle = circle.color;
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
