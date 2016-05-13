gameApp.factory('graphicsEngineService', ['collisionService',
function(collisionService) {
    return {
        initialize: function(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
        },
        clearCanvas: function() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        draw: function(object) {
            object.location.x += object.horzV;
            object.location.y += object.vertV;
            if (!collisionService.collideFloor(this.canvas, object)) {
                object.resolveGravity();
            }
            this.ctx.beginPath();
            this.ctx.arc(object.location.x, object.location.y, object.radius, 0, Math.PI*2, false);
            this.ctx.fillstyle = object.color;
            this.ctx.fill();
            this.ctx.closePath();
        },
        drawFloor: function() {
            this.ctx.beginPath();
            this.ctx.rect(0, this.canvas.height - 10, this.canvas.width, 10);
            this.ctx.fillstyle = 'red';
            this.ctx.fill();
            this.ctx.closePath();
        },
        drawMob()
    };
}]);
